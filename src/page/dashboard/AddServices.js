import React from 'react';

const AddServices = () => {
    return (
        <div className="hero min-h-screen bg-accent mt-8">
        <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-2xl text-center'>Add Services</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Service Charge</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className='btn btn-glass hover:btn-accent'>Login with Google</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddServices;