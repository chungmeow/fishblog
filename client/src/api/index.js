import axios from 'axios';
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const api = axios.create({
    baseURL: `http://localhost:${process.env.API_PORT}`
});

export const insertPost = payload => api.post(`/post`, payload);
export const updatePost = (id, payload) => api.put(`/post/${id}`, payload);
export const getPostById = id => api.get(`/post/${id}`);
export const deletePost = id => api.delete(`/post/${id}`);

const apis = {
    insertPost,
    updatePost,
    getPostById,
    deletePost
};

export default apis;