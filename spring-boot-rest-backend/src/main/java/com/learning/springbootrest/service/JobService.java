package com.learning.springbootrest.service;

import com.learning.springbootrest.model.JobPost;
import com.learning.springbootrest.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    @Autowired
    private JobRepo repo;

    public void addJob(JobPost jobPost){
        repo.addJob(jobPost);
    }

    public List<JobPost> getAllJobs(){
        return repo.getJobs();
    }

    public JobPost getJob(int postId) {
        return repo.getJob(postId);
    }

    public JobPost updateJob(JobPost jobPost) {
        return repo.updateJob(jobPost);
    }

    public void deleteJob(int postId) {
        repo.deleteJob(postId);
    }
}
