import Image from "next/image";
import Link from 'next/link';


export default function Home() {
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
      <div data-theme="dark" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">SHOW YOUR USER THE BEST YOU HAVE</h1>
            <p className="py-6">One script will bring increase the average time a user spends on your site</p>
            <button className="btn btn-primary" >Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
