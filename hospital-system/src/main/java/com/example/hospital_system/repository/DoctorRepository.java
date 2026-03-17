package com.example.hospital_system.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital_system.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}

