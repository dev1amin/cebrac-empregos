/**
 * Script para analisar a estrutura do banco de dados.
 * Execute: npx tsx db-analyze.ts
 */
import "dotenv/config";
import dns from "dns/promises";
import net from "net";
import { createConnection } from "mysql2/promise";

async function main() {
  const hostname = process.env.DB_HOST!;
  console.log(`🔍 Diagnosticando conexão com ${hostname}...`);

  // 1. Tentar resolver DNS
  try {
    const addresses4 = await dns.resolve4(hostname);
    console.log(`  IPv4 (A records): ${addresses4.join(", ")}`);
  } catch (e: any) {
    console.log(`  IPv4: falhou - ${e.code}`);
  }

  try {
    const addresses6 = await dns.resolve6(hostname);
    console.log(`  IPv6 (AAAA records): ${addresses6.join(", ")}`);
  } catch (e: any) {
    console.log(`  IPv6: falhou - ${e.code}`);
  }

  try {
    const all = await dns.lookup(hostname, { all: true });
    console.log(`  dns.lookup (all):`, all);
  } catch (e: any) {
    console.log(`  dns.lookup falhou: ${e.message}`);
  }

  // 2. Tentar abrir socket TCP na porta 3306
  console.log(`\n🔌 Testando conexão TCP na porta 3306...`);
  
  // Tentar IPv6 direto (o hostname só tem AAAA record)
  let connectHost = hostname;
  try {
    const addresses6 = await dns.resolve6(hostname);
    if (addresses6.length > 0) {
      connectHost = addresses6[0];
      console.log(`  Usando IPv6: ${connectHost}`);
    }
  } catch {}

  const tcpOk = await new Promise<boolean>((resolve) => {
    const sock = net.createConnection({ host: connectHost, port: 3306 }, () => {
      console.log(`  ✅ TCP conectou em ${connectHost}:3306`);
      sock.destroy();
      resolve(true);
    });
    sock.setTimeout(10000);
    sock.on("timeout", () => { console.log(`  ❌ TCP timeout (10s)`); sock.destroy(); resolve(false); });
    sock.on("error", (err) => { console.log(`  ❌ TCP erro: ${err.message}`); resolve(false); });
  });

  if (!tcpOk) {
    console.log("\n⚠️  Não foi possível alcançar o MySQL. Possíveis causas:");
    console.log("  - Codespace bloqueia saída na porta 3306");
    console.log("  - Firewall do servidor MySQL não permite este IP");
    console.log("  - O hostname não está acessível desta rede");
    process.exit(1);
  }

  // 3. Conectar MySQL
  console.log(`\n📡 Conectando ao MySQL em ${connectHost}...`);
  const connection = await createConnection({
    host: connectHost,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME || process.env.DB_USER,
    port: 3306,
  });

  console.log("✅ Conectado ao banco:", process.env.DB_HOST);
  console.log("=".repeat(60));

  // Listar todas as tabelas
  const [tables] = await connection.query("SHOW TABLES");
  const tableNames = (tables as any[]).map((row) => Object.values(row)[0] as string);

  console.log(`\n📋 Total de tabelas: ${tableNames.length}\n`);

  for (const tableName of tableNames) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`📌 Tabela: ${tableName}`);
    console.log("-".repeat(60));

    // Estrutura da tabela
    const [columns] = await connection.query(`DESCRIBE \`${tableName}\``);
    console.log("\nColunas:");
    for (const col of columns as any[]) {
      const nullable = col.Null === "YES" ? "NULL" : "NOT NULL";
      const key = col.Key ? ` [${col.Key}]` : "";
      const def = col.Default !== null ? ` DEFAULT=${col.Default}` : "";
      console.log(`  - ${col.Field}: ${col.Type} ${nullable}${key}${def}`);
    }

    // Contar registros
    const [countResult] = await connection.query(`SELECT COUNT(*) as total FROM \`${tableName}\``);
    console.log(`\nRegistros: ${(countResult as any[])[0].total}`);

    // Mostrar amostra (3 primeiros registros)
    const [sample] = await connection.query(`SELECT * FROM \`${tableName}\` LIMIT 3`);
    if ((sample as any[]).length > 0) {
      console.log("\nAmostra (3 registros):");
      for (const row of sample as any[]) {
        const preview: Record<string, any> = {};
        for (const [key, value] of Object.entries(row)) {
          if (typeof value === "string" && value.length > 80) {
            preview[key] = value.substring(0, 80) + "...";
          } else {
            preview[key] = value;
          }
        }
        console.log(`  ${JSON.stringify(preview)}`);
      }
    }
  }

  await connection.end();
  console.log(`\n${"=".repeat(60)}`);
  console.log("✅ Análise concluída!");
}

main().catch((err) => {
  console.error("❌ Erro:", err.message);
  process.exit(1);
});
