import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api';

export default function LoginForm(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        const payload = {
            un: data.un,
            pw: data.pw
        };
        await api.getUser(payload)
        .then(res => {
            console.log(res);
            props.history.push('/');
        })
        .catch(error => { console.log(error); });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="un">User Name</label>
                                <input
                                    className="form-control"
                                    placeholder="User Name"
                                    {...register("un")}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="pw">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    {...register("pw")}
                                />
                            </div>
                        </div>
                        <br/>
                        <div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}