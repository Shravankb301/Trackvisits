"use client";
// components/SignInRedirect.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const SignInRedirect = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/Dashboard');
    }
  }, [isSignedIn, router]);

  return null;
};

export default SignInRedirect;
