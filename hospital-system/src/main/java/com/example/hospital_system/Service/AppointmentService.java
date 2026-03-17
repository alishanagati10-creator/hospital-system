package com.example.hospital_system.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hospital_system.model.Appointment;
import com.example.hospital_system.repository.AppointmentRepository;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repository;

    // Book Appointment
    public Appointment bookAppointment(Appointment a){
        return repository.save(a);
    }

    // Get All Appointments
    public List<Appointment> getAll(){
        return repository.findAll();
    }
}
