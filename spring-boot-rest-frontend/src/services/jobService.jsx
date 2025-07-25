import axios from 'axios';

const API_URL = 'http://localhost:8080';

const jobService = {
  getAllJobs: () => axios.get(`${API_URL}/jobPosts`),
  getJob: (id) => axios.get(`${API_URL}/jobPost/${id}`),
  addJob: (job) => axios.post(`${API_URL}/jobPost`, job),
  updateJob: (job) => axios.put(`${API_URL}/jobPost`, job),
  deleteJob: (id) => axios.delete(`${API_URL}/jobPost/${id}`),
  searchJobs: (keyword) => axios.get(`${API_URL}/jobPosts/keyword/${encodeURIComponent(keyword)}`)
};

export default jobService;
