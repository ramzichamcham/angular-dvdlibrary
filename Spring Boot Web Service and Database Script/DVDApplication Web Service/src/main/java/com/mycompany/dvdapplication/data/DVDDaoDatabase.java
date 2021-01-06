/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.dvdapplication.data;
import com.mycompany.dvdapplication.models.DVD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
/**
 *
 * @author quent
 */
@Repository
public class DVDDaoDatabase implements DVDDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DVDDaoDatabase(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    @Override
    public List<DVD> getAll() {
        final String sql = "SELECT id, title, releaseYear, director, rating, notes FROM DVD;";
        return jdbcTemplate.query(sql, new ToDoMapper());
    }
    
    @Override
    public DVD findById(int id){
        final String sql = "SELECT id, title, releaseYear, director, rating, notes"
                + " FROM DVD WHERE id = ?;";
        return jdbcTemplate.queryForObject(sql, new ToDoMapper(), id);
    } 
    
    @Override
    public List<DVD> findByTitle(String title){
        final String sql = "SELECT id, title, releaseYear, director, rating, notes"
                + " FROM DVD WHERE title = ?;";
        return jdbcTemplate.query(sql, new ToDoMapper(), title);     
    }
    
    @Override
    public List<DVD> findByReleaseYear(int year){
        final String sql = "SELECT id, title, releaseYear, director, rating, notes"
                + " FROM DVD WHERE releaseYear = ?;";
        return jdbcTemplate.query(sql, new ToDoMapper(), year);     
    }
    
    @Override
    public List<DVD> findByDirector(String director){
        final String sql = "SELECT id, title, releaseYear, director, rating, notes"
                + " FROM DVD WHERE director = ?;";
        return jdbcTemplate.query(sql, new ToDoMapper(), director);     
    }
    
    @Override
    public List<DVD> findByRating(String rating){
        final String sql = "SELECT id, title, releaseYear, director, rating, notes"
                + " FROM DVD WHERE rating = ?;";
        return jdbcTemplate.query(sql, new ToDoMapper(), rating);     
    }
    
    @Override
    public boolean update(DVD dvd) {

        final String sql = "UPDATE dvd SET "
                + "title = ?, "
                + "releaseYear = ?, "
                + "director = ?, "
                + "rating = ?, "
                + "notes = ? "
                + "WHERE id = ?;";

        return jdbcTemplate.update(sql,
                dvd.getTitle(),
                dvd.getReleaseYear(),
                dvd.getDirector(),
                dvd.getRating(),
                dvd.getNotes(),
                dvd.getId()) > 0;
    }
    
    @Override
    public boolean deleteById(int id){
        final String sql = "DELETE FROM dvd WHERE id = ?;";
        return jdbcTemplate.update(sql, id) > 0;
    }
    
    @Override
    public DVD add(DVD dvd){
        final String sql = "INSERT INTO dvd(title, releaseYear,director, rating, notes) VALUES(?,?,?,?,?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update((Connection conn) -> {

            PreparedStatement statement = conn.prepareStatement(
                sql, 
                Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, dvd.getTitle());
            statement.setInt(2, dvd.getReleaseYear());
            statement.setString(3, dvd.getDirector());
            statement.setString(4, dvd.getRating());
            statement.setString(5, dvd.getNotes());
            return statement;

        }, keyHolder);

        dvd.setId(keyHolder.getKey().intValue());

        return dvd;
    }
    
    private static final class ToDoMapper implements RowMapper<DVD> {

        @Override
        public DVD mapRow(ResultSet rs, int index) throws SQLException {
            DVD td = new DVD();
            td.setId(rs.getInt("id"));
            td.setTitle(rs.getString("title"));
            td.setReleaseYear(rs.getInt("releaseYear"));
            td.setDirector(rs.getString("director"));
            td.setRating(rs.getString("rating"));
            td.setNotes(rs.getString("notes"));
            return td;
        }
    }
}
