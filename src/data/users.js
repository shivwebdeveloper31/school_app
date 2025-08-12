// src/data/users.js
export const users = [
  {
    username: "Admin User",
    userType: "admin",
    password: btoa("admin123"), // Base64 encryption
    email: "admin@school.com",
    language: "English",
    address: "123 Admin Street",
    standard: null,
    subjects: []
  },
  {
    username: "John Doe",
    userType: "student",
    password: btoa("john123"),
    email: "john@student.com",
    language: "English",
    address: "45 Student Lane",
    standard: "8th",
    subjects: ["Maths", "Science", "History"]
  },
  {
    username: "Jane Smith",
    userType: "student",
    password: btoa("jane123"),
    email: "jane@student.com",
    language: "German",
    address: "78 Learning Road",
    standard: "9th",
    subjects: ["Maths", "Geography"]
  },
  {
    username: "Shivlal",
    userType: "student",
    password: btoa("shivlal123"),
    email: "shivlal@student.com",
    language: "Hindi",
    address: "90 Learning Road",
    standard: "9th",
    subjects: ["Maths", "Geography"]
  },
  {
    username: "Rohit",
    userType: "admin",
    password: btoa("rohit123"),
    email: "rohit@school.com",
    language: "Hindi",
    address: "90 Learning Road",
    standard: "9th",
    subjects: ["Maths", "Geography"]
  }
];
