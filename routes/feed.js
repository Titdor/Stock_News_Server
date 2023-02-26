const express = require("express");
const feedController = require("../Controller/feed");
const router = express.Router();
router.get("/timePosts",feedController.getPosts);
router.get("/timeDailyPosts",feedController.getDailyPost);
router.get("/bezingaPost", feedController.getBezingaPost);
router.post("/timePost", feedController.createPost );
router.post("/bezingaPost", feedController.createBezingaPost);
module.exports = router;