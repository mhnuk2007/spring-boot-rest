import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const jobService = {
  getAllJobs: () => axios.get(`${BASE_URL}/jobPosts`),
  getJob: (id) => axios.get(`${BASE_URL}/jobPost/${id}`),
  addJob: (job) => axios.post(`${BASE_URL}/jobPost`, job),
  updateJob: (job) => axios.put(`${BASE_URL}/jobPost`, job),
  deleteJob: (id) => axios.delete(`${BASE_URL}/jobPost/${id}`)
};

export default jobService;
