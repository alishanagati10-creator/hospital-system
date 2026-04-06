package com.example.codingplatform.service;

import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class CodeExecutionService {

    public String runJavaCode(String code) {

        try {
            // Create file
            File file = new File("Main.java");
            FileWriter writer = new FileWriter(file);
            writer.write(code);
            writer.close();

            // Compile
            Process compile = Runtime.getRuntime().exec("javac Main.java");
            compile.waitFor();

            // Run
            Process run = Runtime.getRuntime().exec("java Main");

            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(run.getInputStream()));

            StringBuilder output = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                output.append(line);
            }

            return output.toString();

        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}