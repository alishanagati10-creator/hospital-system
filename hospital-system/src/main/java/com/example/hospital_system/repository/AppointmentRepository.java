package com.example.hospital_system.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital_system.model.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}


