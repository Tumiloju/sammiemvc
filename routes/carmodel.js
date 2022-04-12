var express = require("express");
var router = express.Router();

var carmodelController = require("../controllers/carmodel");
/* GET home page. */
router.get("/", carmodelController.getAllPosts);


router.post("/", carmodelController.createAPost);

router.get("/:id/delete", carmodelController.deleteAPost);

// get record details
router.get("/:id/edit", carmodelController.editAPost);

// update record
router.post("/:id/edit", carmodelController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update
// router.post("/", blogController.createAPost);

// get post delete

module.exports = router;
