const router = require("express").Router();
// const commentRoutes = require("./api/comment-routes");
// const userRoutes = require("./api/user-routes");
// const postRoutes = require("./api/post-routes");
const homeRoutes = require("./home-routes");

// router.use("/", userRoutes);
// router.use("/models/comment.js", commentRoutes);
// router.use("/", postRoutes);
router.use("/", homeRoutes);

module.exports = router;
