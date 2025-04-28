import React from 'react';
import { User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

interface Props {
  user: any;
  onSignOut: () => void;
}

export default function UserMenu({ user, onSignOut }: Props) {
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      onSignOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-gray-400">
        <User size={20} />
        <span>{user.email}</span>
      </div>
      <button
        onClick={handleSignOut}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <LogOut size={20} />
        <span>Sign Out</span>
      </button>
    </div>
  );
}