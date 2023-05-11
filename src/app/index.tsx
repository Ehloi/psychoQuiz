"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the email address
    if (email.trim() !== '') {
      // Redirect to the Home component
      router.push('/quiz1');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-8">Welcome to this survey!</h1>
      <p className="my-4">
        After answering these 3 psychometry tests, you will have a chance to win a prize!
      </p>

      <form onSubmit={handleEmailSubmit}>
        <input
          type="email"
          placeholder="Enter your email please"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 mt-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
