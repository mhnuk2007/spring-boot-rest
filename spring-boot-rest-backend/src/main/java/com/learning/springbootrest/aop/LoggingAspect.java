package com.learning.springbootrest.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

    //return type, class name.method name(arguments)
    @Before("execution(* com.learning.springbootrest.service.UserService.*(..))")
    public void logMethodCall(JoinPoint jp) {
        LOGGER.info("Method called: " + jp.getSignature().getName());
    }

    @After("execution(* com.learning.springbootrest.service.UserService.*(..))")
    public void logMethodExecute(JoinPoint jp) {
        LOGGER.info("Method executed: " + jp.getSignature().getName());
    }

    @AfterThrowing("execution(* com.learning.springbootrest.service.UserService.*(..))")
    public void logMethodCrash(JoinPoint jp){
        LOGGER.info("Method " + jp.getSignature().getName() + " has some issue");
    }

    @AfterReturning("execution(* com.learning.springbootrest.service.UserService.*(..))")
    public void logMethodSuccess(JoinPoint jp){
        LOGGER.info("Method " + jp.getSignature().getName() + " executed successfully");
    }


}



