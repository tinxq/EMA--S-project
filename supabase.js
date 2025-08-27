// supabase.js
const SUPABASE_URL = "https://wndgcpofxemeksgqvzwa.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduZGdjcG9meGVtZWtzZ3F2endhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMDE4OTMsImV4cCI6MjA3MTg3Nzg5M30.dFdmZDpuOwbBeAY7oFch9SBjdSNe69_XGHiTZUeSi-A";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function saveResult(name, email, level, score) {
  const { data, error } = await supabase
    .from('results')
    .insert([{ name, email, level, score }]);
  
  if (error) throw error;
  return data;
}
