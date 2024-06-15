// components/InteractiveButton.js
'use client';

import { useRouter } from 'next/router';

export default function InteractiveButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Dashboard');
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Get Started
    </button>
  );
}
