const conn = require('../Configs/db');
const fs = require('fs');
// Function to fetch image data from database
const ImgData = async (req, res) => {
    try {
        // Example SQL query to select all columns from the images table
        const sql = 'SELECT * FROM images';
        // Execute the query
        conn.query(sql, (err, results) => {
            if (err) {
                console.error('Error fetching image data:', err);
                return res.status(500).json({ error: 'Error Fetching Image Data' });
            }
            // Send response with all data from the table
            res.status(200).json(results);
        });
    } catch (error) {
        console.error('Error in ImgData function:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
// Delete Image Slider
const ImgDataDel = async (req, res) => {
  try {
    const id = req.body.id; // retrieve the id from the request body
    console.log("Id From Frontend=>", id);
    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
    // Delete the image from the database
    const query = `DELETE FROM images WHERE id = ?`;
    await conn.query(query, id);
    // Delete the stored image file
    const filePath = `uploads/${id}.jpg`; // assuming the image is stored in a folder called "uploads"
    fs.unlinkSync(filePath); // delete the file
    res.json({ message: `Image with ID ${id} Deleted Successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to Delete Image" });
  }
};


// Export Fun
module.exports = {
    ImgData,
    ImgDataDel
};
