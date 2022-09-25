const router = require("express").Router();
const commentRoutes = require("./api/comment-routes");
const userRoutes = require("./api/user-routes");
const postRoutes = require("./api/post-routes");

router.use("/models/user.js", userRoutes);
router.use("/models/comment.js", commentRoutes);
router.use("/models/post.js", postRoutes);

module.exports = router;
