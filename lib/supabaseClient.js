import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nkatyrtctcrpllvloayx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYXR5cnRjdGNycGxsdmxvYXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MTI5ODMsImV4cCI6MjA3NjM4ODk4M30.5gimC4WwUQYqPVbU2ok1ehScRpgfCOvAlhlAaKFSHfI";
export const supabase = createClient(supabaseUrl, supabaseKey);
