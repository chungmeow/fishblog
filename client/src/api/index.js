import axios from 'axios';
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const apiDir = process.env.API_DIR;
const api = axios.create({
    //baseURL: apiDir
    baseURL: `http://localhost:3002`
});

export const createPost = payload => api.post(`/api/post`, payload, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true })
    .then(res => {})
    .catch(error => { console.log(error); });
//export const updatePost = (id, payload) => api.put(`/api/post/${id}`, payload);
//export const getPostById = id => api.get(`/api/post/${id}`);
//export const deletePost = id => api.delete(`/api/post/${id}`);
export const createUser = payload => api.post(`/api/user/register`, payload, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true })
    .then(res => {})
    .catch(error => { console.log(error); });
export const getUser = payload => api.post(`/api/user/login`, payload, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true })
    .then(res => {})
    .catch(error => { console.log(error); });

const apis = {
    createPost,
    //updatePost,
    //getPostById,
    //deletePost,
    createUser,
    getUser
};

export default apis;