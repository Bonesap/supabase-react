import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      files: {
        Row: {
          id: string;
          user_id: string;
          google_drive_id: string;
          name: string;
          mime_type: string | null;
          size_bytes: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          google_drive_id: string;
          name: string;
          mime_type?: string | null;
          size_bytes?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          google_drive_id?: string;
          name?: string;
          mime_type?: string | null;
          size_bytes?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Functions: {
      get_total_file_size: {
        Args: Record<PropertyKey, never>;
        Returns: number;
      };
    };
  };
};
