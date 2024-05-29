const db = require("./../database");

const getAllBooks = (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({
      status: "success",
      data: {
        books: results,
      },
    });
  });
};

const addbook = (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS books (
      book_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      author VARCHAR(255) NOT NULL,
      amount int not null,
      tag VARCHAR(255),
      url VARCHAR(255)
    );
  `;

  // Data to insert
  const { name, author, amount, tag, url } = req.body;

  const insertUserQuery = `
    INSERT INTO books (name, author,amount,tag,url)
    VALUES (?, ?, ?, ?,?)
  `;

  // First, create the table if it doesn't exist
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating table:", err.stack);
      res.status(500).send("Error creating table");
      return;
    }

    // Then, insert the new user into the table
    db.query(
      insertUserQuery,
      [name, author, amount, tag, url],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err.stack);
          res.status(500).send("Error inserting user");
          return;
        }
        res.status(200).send({
          message: "book inserted successfully",
        });
      }
    );
  });
};

module.exports = { getAllBooks, addbook };
