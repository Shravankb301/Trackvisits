'use client';
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import router from 'next/router'
import Link from "next/link"
import React from "react";


export default function Home() {
  //move to a differnt page on click of the button  
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/signin');
    },
  });

  return (
    <div>
      {/* Navbar */}
      <div data-theme="dark" className="navbar shadow-lg bg-base-200 text-neutral-content">
        <div className="flex container mx-auto">
          <div className="flex-auto">
            <span className="text-4xl font-bold ">HeatScope</span>
          </div>
          <div className="flex-auto px-2 mx-2">
            <a className="btn btn-ghost btn-sm rounded-btn">Demo</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Feedback</a>
          </div>
          <div className="flex-none px-auto py-2 my-2 mx-auto">
            <button className="btn  btn-warning">Log in</button>
          </div>
        </div>
      </div>
      {/* Center */}
      <div data-theme="dark" className="hero min-h-screen bg-base-200" >
        <div className=" text-center">
          <div className="max-w-md" style={{ marginTop: '-500px' }}>
            <h1 className="text-5xl font-bold">SHOW YOUR USER THE BEST YOU HAVE</h1>
            <p className="py-6">One script will bring increase the average time a user spends on your site</p>
            <Link href="/LogIn">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    {/* New login style */}
      <div className="p-8">
        <div className="text-white">{session?.data?.user?.email}</div>
        <button className="text-white" onClick={() => signOut()} > logout</button>

      </div>
      </div>
      );
}

Home.requireAuth = true