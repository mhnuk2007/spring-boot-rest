package com.learning.springbootrest.repo;

import com.learning.springbootrest.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobPost, Integer> {
    List<JobPost> findByPostProfileContainingOrPostDescContaining(String postProfile, String postDesc);

/*
    public void addJob(JobPost job) {
        jobs.add(job);
        System.out.println("Job added successfully");
        System.out.println(jobs);
    }

    public List<JobPost> getJobs() {
        return jobs;
    }

    public JobPost getJob(int postId) {
        for (JobPost job : jobs) {
            if (job.getPostId() == postId) {
                return job;
            }

        }
        return null;
    }

    public JobPost updateJob(JobPost jobPost) {
        for (JobPost job : jobs) {
            if (job.getPostId() == jobPost.getPostId()) {
                job.setPostProfile(jobPost.getPostProfile());
                job.setPostDesc(jobPost.getPostDesc());
                job.setReqExperience(jobPost.getReqExperience());
                job.setPostTechStack(jobPost.getPostTechStack());
                return job;
            }

        }
        return null;
    }

    public void deleteJob(int postId) {
        for (JobPost job : jobs) {
            if (job.getPostId() == postId) {
                jobs.remove(job);
                return;
            }
        }
    }



 */
}