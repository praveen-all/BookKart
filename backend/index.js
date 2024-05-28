const express=require('express');
const app=express();
const db=require('./database');



app.use(express.json());


const createTableAndInsertUser = (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    );
  `;

  // Data to insert
  const { name, email } = req.body;

  const insertUserQuery = `
    INSERT INTO users (name, email)
    VALUES (?, ?)
  `;

  // First, create the table if it doesn't exist
  db.query(createTableQuery, (err, result) => {
    if (err) {
        console.log(err);
      console.error("Error creating table:", err.stack);
      res.status(500).send("Error creating table");
      return;
    }

    // Then, insert the new user into the table
    db.query(
      insertUserQuery,
      [name, email],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err.stack);
          res.status(500).send("Error inserting user");
          return;
        }
        res.status(200).send("User inserted successfully");
      }
    );
  });
};

app.post('/',createTableAndInsertUser);



app.listen(3000,()=>{
    console.log("server started at 3000");
})