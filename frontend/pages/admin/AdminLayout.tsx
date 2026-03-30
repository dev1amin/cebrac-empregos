import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import {
    LayoutDashboard,
    Building2,
    Briefcase,
    Users,
    Newspaper,
    Tag,
    Send,
    HelpCircle,
    ArrowLeft,
    Menu,
    X,
    LogOut,
    Loader2,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const NAV_ITEMS = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/empresas", icon: Building2, label: "Empresas" },
    { to: "/admin/vagas", icon: Briefcase, label: "Vagas" },
    { to: "/admin/candidatos", icon: Users, label: "Candidatos" },
    { to: "/admin/noticias", icon: Newspaper, label: "Notícias" },
    { to: "/admin/areas", icon: Tag, label: "Áreas" },
    { to: "/admin/faq", icon: HelpCircle, label: "FAQ" },
    { to: "/admin/encaminhamentos", icon: Send, label: "Encaminhamentos" },
];

export default function AdminLayout() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user, loading, logout } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-brand-blue text-white flex flex-col transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-lg font-bold tracking-tight">Cebrac Admin</h1>
                    <p className="text-xs text-white/50 mt-1">Painel de Controle</p>
                </div>

                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                    {NAV_ITEMS.map((item) => {
                        const isActive =
                            item.to === "/admin"
                                ? location.pathname === "/admin"
                                : location.pathname.startsWith(item.to);
                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? "bg-white/15 text-white"
                                        : "text-white/60 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao site
                    </Link>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 text-red-300/70 hover:text-red-300 text-sm transition-colors w-full"
                    >
                        <LogOut className="w-4 h-4" />
                        Sair
                    </button>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top bar */}
                <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex items-center gap-4">
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                    <div className="flex-1" />
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold">
                            {user.nome?.charAt(0)?.toUpperCase() || "A"}
                        </div>
                        <span className="text-sm font-medium text-gray-700 hidden sm:block">{user.nome || user.email}</span>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
