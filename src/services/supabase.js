
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://nsaybdpeawtcruxdtpcf.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zYXliZHBlYXd0Y3J1eGR0cGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NDY1OTQsImV4cCI6MjAwODAyMjU5NH0.hkfTLxK6AwYPTaUIgNowLD1eiuPQ1gI2_1LVbAtPGHg";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase