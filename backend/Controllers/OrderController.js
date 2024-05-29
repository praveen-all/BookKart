const db = require("./../database");

const addOrder = (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      order_id INT AUTO_INCREMENT PRIMARY KEY,
      user_id int not null,
      payment_id int not null,
     book_id int not null
    );
  `;

  // Data to insert
  const { user_id, payment_id, book_id } = req.body;

  const insertUserQuery = `
    INSERT INTO orders (user_id, payment_id,book_id)
    VALUES (?, ?, ?)
  `;

  // First, create the table if it doesn't exist
  db.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating table:", err.stack);
      res.status(500).send("Error creating table");
      return;
    }

    // Then, insert the new user into the table
    db.query(insertUserQuery, [user_id, payment_id, book_id], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err.stack);
        res.status(500).send("Error inserting user");
        return;
      }
      res.status(200).send({
        message: "ordered   successfully",
      });
    });
  });
};

const orderByUserId = async (req, res) => {
  const userId = req.userId;
  console.log(req.user);
  await db.query(
    "SELECT * FROM orders WHERE user_id = ?",
    [userId],
    (err, results) => {
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
          orders: results,
        },
      });
    }
  );
};

module.exports = { orderByUserId, addOrder };
