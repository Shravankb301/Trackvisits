import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';


/// Testing 

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';
import { push } from "firebase/database";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
          <div data-theme="dark" className="navbar shadow-lg bg-base-200 text-neutral-content">
        <div className="flex container mx-auto">
          <div className="flex-auto">
            <Link href={"/"}><span className="text-4xl font-bold ">HeatScope</span></Link>
          </div>
          <div className="flex-auto px-2 mx-2">
            <a className="btn btn-ghost btn-sm rounded-btn">Demo</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Feedback</a>
          </div>
          <div className="flex-none px-auto py-2 my-2 mx-auto">
            {/* <button className="btn  btn-warning">Log in</button> */}
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn >
              <UserButton showName/>
            </SignedIn>
           
          </div>
        </div>
        
      </div>
            
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}