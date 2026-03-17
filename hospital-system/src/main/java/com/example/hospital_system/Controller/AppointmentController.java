package com.example.hospital_system.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hospital_system.model.Appointment;
import com.example.hospital_system.Service.AppointmentService;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    // Book Appointment
    @PostMapping("/book")
    public Appointment book(@RequestBody Appointment appointment) {
        return service.bookAppointment(appointment);
    }

    // Get All Appointments
    @GetMapping("/all")
    public List<Appointment> getAll() {
        return service.getAll();
    }
}