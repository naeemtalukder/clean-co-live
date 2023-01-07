import React from "react";

const Landing = () => {
    return (
        <div className="relative">
        <div className="hero h-screen lg:h-[60vh] bg-accent relative z-10 mt-16">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <p className="px-1 text-xl">Best Quality</p>
                    <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p className="py-6 px-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <button className="btn btn-primary mx-1">Get Started</button>
                </div>
                <div className="h-[60vh] shrink-0">
                    <img src="https://i.ibb.co/6RX8wcH/bucketgirl-png.png" className="h-full" alt="" />
                </div>
            </div>
        </div>
        <div className="rounded-2xl mx-auto mt-[-50px] relative z-20 shadow-lg p-10 bg-base-200 w-5/6">
            <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <button className="btn btn-primary mt-5">Get a Quote</button>
        </div>
        </div>
    );
};

export default Landing;