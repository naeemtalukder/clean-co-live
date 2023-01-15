import React from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';

const AddServices = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = async(data) => {
        const res = await fetcher.post("add-services", data);
        console.log(res);
    }
    return (
        <div className="h-screen w-full bg-accent mt-8">
        <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-2xl text-center'>Add Services</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" 
                        className="input input-bordered"
                        {...register("serviceName")}
                         />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Service Charge</span>
                        </label>
                        <input type="text" 
                        className="input input-bordered" 
                        {...register("serviceCharge")}
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add Service</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddServices;