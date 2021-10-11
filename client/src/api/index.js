import axios from 'axios';
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const api = axios.create({
    //baseURL: `http://localhost:${process.env.API_PORT}`
    baseURL: `http://localhost:3002`
});

export const createPost = payload => api.post(`/api/post`, payload);
//export const updatePost = (id, payload) => api.put(`/api/post/${id}`, payload);
//export const getPostById = id => api.get(`/api/post/${id}`);
//export const deletePost = id => api.delete(`/api/post/${id}`);
//export const createUser = payload => api.post(`/api/user`, payload);
export const getUser = payload => api.post(`/api/user/login`, payload);

const apis = {
    createPost,
    //updatePost,
    //getPostById,
    //deletePost,
    //createUser,
    getUser
};

export default apis;