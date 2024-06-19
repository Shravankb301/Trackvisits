import Image from "next/image";
import Link from 'next/link';
import { SignInButton } from "@clerk/nextjs";
import { Routes, Route } from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
} from "@clerk/clerk-react";

export default function Home() {
  
  return (
    <div>        
      {/* Center */}
      <div data-theme="dark" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">SHOW YOUR USER THE BEST YOU HAVE</h1>
            <p className="py-6">One script will bring increase the average time a user spends on your site</p>
            <Link href="/Dashboard"><button className="btn btn-primary" >Get Started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}