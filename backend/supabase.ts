import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.supabase_url!;
const supabaseKey = process.env.supabase_secret_key!;

// Service role client — bypasses RLS for admin CRUD operations
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Separate client for auth operations (login, getUser, etc)
// to avoid contaminating the service role client's auth state
export const supabaseAuth = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
