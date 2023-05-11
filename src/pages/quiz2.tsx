"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function FirstQuiz() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleQuizComplete = () => {
      if (
        iframeRef.current &&
        iframeRef.current.contentWindow?.location.href.includes('results.php')
      ) {
        setQuizCompleted(true);
      }
    };

    window.addEventListener('message', handleQuizComplete);

    return () => {
      window.removeEventListener('message', handleQuizComplete);
    };
  }, []);
  const handleRedirectToQuiz3 = () => {
    router.push('/quiz3');
  };
  return (
    <div>
      <header className="text-center py-4">
        <h1 className="text-2xl font-bold">Psychometry test</h1>
        <p>Test 2/3</p>
      </header>

      <div className="w-1/2 mx-auto">
        <iframe
          src="https://openpsychometrics.org/tests/OEJTS/"
          title="Psychometry Quiz"
          ref={iframeRef}
          className="w-full h-screen"
        />
      </div>
      <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleRedirectToQuiz3}
        >
          Quiz Completed! Go to Quiz 3
        </button>
      {quizCompleted && (
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Quiz Completed!
        </button>
      )}
    </div>
  );
}
