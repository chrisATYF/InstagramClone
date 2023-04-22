import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://uhljezsgmikikyvgqbey.supabase.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVobGplenNnbWlraWt5dmdxYmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxOTE0NTksImV4cCI6MTk5Nzc2NzQ1OX0.DI-S6zV9oLHBNUuE-_tFFmf9h__MCNsrI7Y0ttBgaXo';

export const supabase = createClient(supabaseUrl, supabaseKey);