import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddTestimonial = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const testimonialData = {
            name: data.name,
            email: data.email,
            quote: data.description,
            from: data.company,
            img: loggedInUser.photoURL
        }
        fetch('https://tech-world-web.herokuapp.com/addTestimonial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testimonialData)
        })
            .then(res => {
                alert('Thank you for your testimony.')
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, height: '100%', backgroundColor: "#161616" }}>
                <h5 className="p-1 my-5 ml-2 text-warning">Add Testimonial</h5>
                <div className="container card" style={{ backgroundColor: 'white' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5 mt-5">
                            <div className="form-group">
                                <label className="text-warning">Your Name</label>
                                <input className="form-control" type="text" name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Your Email</label>
                                <input className="form-control" type="text" name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Company's name, Designation</label>
                                <input className="form-control" type="text" name="company" {...register("company", { required: true })} />
                                {errors.company && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label className="text-warning">Quote</label>
                                <textarea className="form-control" type="text" name="description" {...register("description", { required: true })} placeholder="what you think about us?"></textarea>
                                {errors.description && <span>This field is required</span>}
                            </div>
                            <button className="btn btn-warning" type="submit" >Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddTestimonial;