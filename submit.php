<?php
// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "mydb");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the data from the signup form
$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];

// Insert the data into the database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
if (mysqli_query($conn, $sql)) {
  echo "New user successfully created!";
} else {
  echo "Error creating user: " . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);
?>