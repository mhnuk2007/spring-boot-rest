package com.learning.springbootrest.repo;

import com.learning.springbootrest.model.JobPost;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class JobRepo {

    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
            new JobPost(1, "Java Developer", "Backend development using Spring Boot", 2, new String[]{"Java", "Spring Boot", "MySQL"}),
            new JobPost(2, "Frontend Developer", "Create responsive UI", 1, new String[]{"React", "JavaScript", "HTML", "CSS"}),
            new JobPost(3, "Full Stack Developer", "Work on both frontend and backend", 3, new String[]{"Node.js", "Express", "MongoDB", "React"}),
            new JobPost(4, "DevOps Engineer", "Manage CI/CD pipelines", 4, new String[]{"Docker", "Jenkins", "AWS"}),
            new JobPost(5, "Data Analyst", "Analyze business data", 2, new String[]{"Python", "Pandas", "SQL"}),
            new JobPost(6, "Android Developer", "Develop Android applications", 2, new String[]{"Kotlin", "Java", "Android SDK"}),
            new JobPost(7, "iOS Developer", "Develop iOS applications", 2, new String[]{"Swift", "Xcode", "iOS SDK"}),
            new JobPost(8, "Cloud Engineer", "Deploy services on cloud", 3, new String[]{"Azure", "Terraform", "Docker"}),
            new JobPost(9, "AI/ML Engineer", "Build ML models", 2, new String[]{"Python", "TensorFlow", "Scikit-learn"}),
            new JobPost(10, "Software Tester", "Test web and mobile apps", 1, new String[]{"Selenium", "JUnit", "Postman"})

    ));


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
}
