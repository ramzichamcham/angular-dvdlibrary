/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.dvdapplication.data;

import com.mycompany.dvdapplication.models.DVD;
import java.util.List;

/**
 *
 * @author quent
 */
public interface DVDDao {
    List<DVD> getAll();

    DVD findById(int id);    
    List<DVD> findByTitle(String title);
    List<DVD> findByReleaseYear(int year);
    List<DVD> findByDirector(String director);
    List<DVD> findByRating(String rating);
    
    // true if item exists and is updated
    boolean update(DVD todo);

    // true if item exists and is deleted
    boolean deleteById(int id);
    
    DVD add(DVD dvd);
}
