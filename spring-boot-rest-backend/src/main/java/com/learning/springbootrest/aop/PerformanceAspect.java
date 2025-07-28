package com.learning.springbootrest.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PerformanceAspect {
    private static final Logger LOGGER = LoggerFactory.getLogger(PerformanceAspect.class);

    @Around("execution(* com.learning.springbootrest.service.JobService.getJob(..))")
    public Object monitorTime(ProceedingJoinPoint jpj) throws Throwable {
        long start = System.currentTimeMillis();
        Object obj = jpj.proceed();
        long end = System.currentTimeMillis();

        LOGGER.info("Execution time: " + (end - start) + " ms");

        return obj;
    }
}
