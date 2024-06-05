import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vnwdxfthlinbjomjxdsp.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZud2R4ZnRobGluYmpvbWp4ZHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1ODg4NjcsImV4cCI6MjAzMzE2NDg2N30.71OeQkG66ls_trb3ercIy4bAOKWfRgpgV5zCCnWowpU';

export const supabase = createClient(supabaseUrl, supabaseKey);
