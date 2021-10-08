import axios from 'axios';
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const api = axios.create({
    //baseURL: `http://localhost:${process.env.API_PORT}`
    baseURL: `http://localhost:3002`
});

export const insertPost = payload => api.post(`/api/post`, payload);
export const updatePost = (id, payload) => api.put(`/api/post/${id}`, payload);
export const getPostById = id => api.get(`/api/post/${id}`);
export const deletePost = id => api.delete(`/api/post/${id}`);

const apis = {
    insertPost,
    updatePost,
    getPostById,
    deletePost
};

export default apis;