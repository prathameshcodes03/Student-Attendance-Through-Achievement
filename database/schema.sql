CREATE DATABASE student_achievement;
USE student_achievement;


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  username VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE achievements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  event_name VARCHAR(200),
  organizing_body VARCHAR(200),
  event_date DATE,
  achievement_type VARCHAR(50),
  certificate_path VARCHAR(255),
  status ENUM('pending','approved','rejected') DEFAULT 'pending',
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    full_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE attendance_points (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    achievement_id INT,
    points_awarded INT,
    approved_by INT,
    approved_at TIMESTAMP,

    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (achievement_id) REFERENCES achievements(achievement_id),
    FOREIGN KEY (approved_by) REFERENCES admins(admin_id)
);