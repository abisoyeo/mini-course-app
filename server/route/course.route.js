const router = require("express").Router();
const courseController = require("../controller/course.controller");
const {courseValidation} = require("../middleware/course.middleware");
const {authenticateToken} = require("../middleware/authorize");

router.use(authenticateToken); 
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getOneCourse);
router.post("/", courseValidation, courseController.createCourse);
router.put("/:id", courseValidation, courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;