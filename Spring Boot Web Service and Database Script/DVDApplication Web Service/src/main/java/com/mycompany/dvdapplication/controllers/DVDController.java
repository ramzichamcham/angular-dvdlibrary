/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.dvdapplication.controllers;

import com.mycompany.dvdapplication.data.DVDDao;
import com.mycompany.dvdapplication.models.DVD;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class DVDController {
     private final DVDDao dao;

    public DVDController(DVDDao dao) {
        this.dao = dao;
    }

    @GetMapping("/dvds")
    public List<DVD> all() {
        return dao.getAll();
    }
    
    @PostMapping("/dvd")
    @ResponseStatus(HttpStatus.CREATED)
    public DVD create(@RequestBody DVD dvd) {
        return dao.add(dvd);
    }
    
    @GetMapping("/dvd/{id}")
    public ResponseEntity<DVD> findById(@PathVariable int id) {
    DVD result = dao.findById(id);
    if (result == null) {
        return new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }
    return ResponseEntity.ok(result);
    }
    
    @GetMapping("/dvds/title/{title}")
    public ResponseEntity<List<DVD>> findByTitle(@PathVariable String title){
        List<DVD> result = dao.findByTitle(title);
            if (result == null) {
        return new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }
    return ResponseEntity.ok(result);
    }
    
    @GetMapping("/dvds/releaseYear/{year}")
    public ResponseEntity<List<DVD>> findByYear(@PathVariable int year){
        List<DVD> result = dao.findByReleaseYear(year);
            if (result == null) {
        return new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }
    return ResponseEntity.ok(result);
    }
    
    @GetMapping("/dvds/director/{director}")
    public ResponseEntity<List<DVD>> findByDirector(@PathVariable String director){
        List<DVD> result = dao.findByDirector(director);
            if (result == null) {
        return new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }
    return ResponseEntity.ok(result);
    }
    
    @GetMapping("/dvds/rating/{rating}")
    public ResponseEntity<List<DVD>> findByRating(@PathVariable String rating){
        List<DVD> result = dao.findByRating(rating);
            if (result == null) {
        return new ResponseEntity(null, HttpStatus.NOT_FOUND);
    }
    return ResponseEntity.ok(result);
    }

    
    @PutMapping("/dvd/{id}")
    public ResponseEntity update(@PathVariable int id, @RequestBody DVD dvd) {
    ResponseEntity response = new ResponseEntity(HttpStatus.NOT_FOUND);
    if (id != dvd.getId()) {
        response = new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
    } else if (dao.update(dvd)) {
        response = new ResponseEntity(HttpStatus.NO_CONTENT);
    }
    return response;
    }
    
    @DeleteMapping("/dvd/{id}")
    public ResponseEntity delete(@PathVariable int id) {
    if (dao.deleteById(id)) {
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity(HttpStatus.NOT_FOUND);
    }
}
