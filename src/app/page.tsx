"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleQuizComplete = () => {
      // Check if the iframe URL contains the quiz results page
      if (iframeRef.current && iframeRef.current.contentWindow?.location.href.includes('https://openpsychometrics.org/tests/OEPS/results.php')) {
        setQuizCompleted(true);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('message', handleQuizComplete);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleQuizComplete);
    };
  }, []);

  return (
    <div>
      <iframe
        src="https://openpsychometrics.org/tests/OEPS/"
        title="Psychometry Quiz"
        ref={iframeRef}
        className="w-full h-screen"
      />

      {quizCompleted && (
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Quiz Completed!
        </button>
      )}
    </div>
  );
}
