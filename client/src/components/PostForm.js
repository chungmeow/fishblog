import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../api';

export default function PostForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            body: data.body,
            title: data.title,
            image: data.image[0].name
        };
        await api.insertPost(payload)
            .then(res => { console.log(res); })
            .catch(error => { console.log(error); });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="title">Title</label>
                                <input
                                    className="form-control"
                                    placeholder="Title"
                                    {...register("title")}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="body">Description</label>
                                <textarea
                                    rows="5"
                                    className="form-control"
                                    placeholder="Description"
                                    {...register("body")}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group floating-label-form-group controls">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    {...register("image")}
                                />
                            </div>
                        </div>
                        <br/>
                        <div>
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};