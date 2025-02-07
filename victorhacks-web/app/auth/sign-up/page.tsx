"use client";
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase/config';

const HackathonSignup: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      if (res) {
        console.log('Successfully signed in with Google:', res);
      }
    } catch (err) {
      console.error('Google sign-in error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Hackathon Sign-Up</h2>
        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error.message}
          </div>
        )}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
};

export default HackathonSignup;
