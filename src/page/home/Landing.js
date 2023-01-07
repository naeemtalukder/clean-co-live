import React from "react";

const Landing = () => {
    return (
        <div className="hero mt-16 h-screen lg:h-[60vh] bg-accent">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <p className="px-1 text-xl">Best Quality</p>
                    <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p className="py-6 px-1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary mx-1">Get Started</button>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/6RX8wcH/bucketgirl-png.png" className="max-w-sm shrink-0" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Landing;