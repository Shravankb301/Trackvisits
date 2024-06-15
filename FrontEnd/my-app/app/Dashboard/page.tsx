export default function Page() {
    return (
        <div className="">
            <div data-theme="dark" className="navbar shadow-lg bg-base-200 text-neutral-content">
                <div className="flex container mx-auto">
                    <div className="flex-auto">
                        <span className="text-4xl font-bold">HeatScope</span>
                    </div>
                    <div className="flex-auto px-2 mx-2">
                        <a className="btn btn-ghost btn-sm rounded-btn">Welcome</a>
                        <a className="btn btn-ghost btn-sm rounded-btn">@user</a>
                    </div>
                </div>
            </div>

            <div className="join ">
                <input className="input input-bordered join-item btn-outline btn-warning" placeholder="www.example.com" />
                <button className="btn join-item rounded-r-full btn-warning">ADD</button>
            </div>

            <div className="stats shadow ">
                <div className="stat ">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>

            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary"></div>
                </div>
            </div>

            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Total Clicks</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">36%</div>
                    <div className="stat-title">Screen Captured</div>
                    <div className="stat-desc text-secondary">21 item selected</div>
                </div>

            </div>
            <div className="mockup-window border bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">TESTING IN BROWSER!</div>
                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}