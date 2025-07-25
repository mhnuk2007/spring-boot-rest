package com.learning.springbootrest.service;

import com.learning.springbootrest.model.JobPost;
import com.learning.springbootrest.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class JobService {


    @Autowired
    private JobRepo repo;

    public void addJob(JobPost jobPost){
        repo.save(jobPost);
    }

    public List<JobPost> getAllJobs(){
        return repo.findAll();
    }

    public JobPost getJob(int postId) {
        return repo.findById(postId).orElse(new JobPost());
    }

    public JobPost updateJob(JobPost jobPost) {
        return repo.save(jobPost);
    }

    public void deleteJob(int postId) {
        repo.deleteById(postId);
    }

    public void load() {

        List<JobPost> jobs = new ArrayList<>(Arrays.asList(
                new JobPost(1, "Java Developer", "Backend development using Spring Boot", 2, Arrays.asList("Java", "Spring Boot", "MySQL")),
                new JobPost(2, "Frontend Developer", "Create responsive UI", 1, Arrays.asList("React", "JavaScript", "HTML", "CSS")),
                new JobPost(3, "Full Stack Developer", "Work on both frontend and backend", 3, Arrays.asList("Node.js", "Express", "MongoDB", "React")),
                new JobPost(4, "DevOps Engineer", "Manage CI/CD pipelines", 4, Arrays.asList("Docker", "Jenkins", "AWS")),
                new JobPost(5, "Data Analyst", "Analyze business data", 2, Arrays.asList("Python", "Pandas", "SQL")),
                new JobPost(6, "Android Developer", "Develop Android applications", 2, Arrays.asList("Kotlin", "Java", "Android SDK")),
                new JobPost(7, "iOS Developer", "Develop iOS applications", 2, Arrays.asList("Swift", "Xcode", "iOS SDK")),
                new JobPost(8, "Cloud Engineer", "Deploy services on cloud", 3, Arrays.asList("Azure", "Terraform", "Docker")),
                new JobPost(9, "AI/ML Engineer", "Build ML models", 2, Arrays.asList("Python", "TensorFlow", "Scikit-learn")),
                new JobPost(10, "Software Tester", "Test web and mobile apps", 1, Arrays.asList("Selenium", "JUnit", "Postman"))

        ));
        repo.saveAll(jobs);
    }

    public List<JobPost> searchByKeyword(String keyword) {
        return repo.findByPostProfileContainingOrPostDescContaining(keyword, keyword);
    }
}
