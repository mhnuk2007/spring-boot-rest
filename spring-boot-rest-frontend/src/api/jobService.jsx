import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAllJobs = () => axios.get(`${BASE_URL}/jobPosts`);

export const getJobById = (postId) => axios.get(`${BASE_URL}/jobPost/${postId}`);

export const addJob = (job) => axios.post(`${BASE_URL}/jobPost`, job);

export const updateJob = (job) => axios.put(`${BASE_URL}/jobPost`, job);

export const deleteJob = (postId) => axios.delete(`${BASE_URL}/jobPost/${postId}`);
