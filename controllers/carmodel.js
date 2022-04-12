const pool = require("../models/index");
const carmodelController = {};

carmodelController.getAllPosts = function (req, res, next) {
  // get all posts from database
  pool.query("SELECT * FROM blackforceTumi", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("carmodel", { carmodelPosts: results.rows });
  });
};

carmodelController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer ;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;



  pool.query(
    `INSERT INTO blackforceTumi (MANUFACTURER,MODEL,COLOR,YEAR ) VALUES ($1 , $2, $3, $4)`,
    [manufacturer , model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("carmodel", { carmodelPosts: [] });
    }
  );
};

carmodelController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in blackforceesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM blackforceTumi WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/carmodel");
    }
  );
};

carmodelController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM blackforceTumi WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("carmodelEdit", { carmodelPost: results.rows[0] });
    }
  );
};


carmodelController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;
  
  pool.query(
    "UPDATE blackforceTumi SET manufacturer = $1, model = $2, color = $3,year = $4 WHERE id = $5",
    [manufacturer , model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/carmodel");
    }
  );
};


module.exports = carmodelController;