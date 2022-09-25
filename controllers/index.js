const router = require("express").Router();
// const commentRoutes = require("./api/");
// const userRoutes = require("./api/user-routes");
// const postRoutes = require("./api/post-routes");
const homeRoutes = require("./home-routes");
const dashboardROutes = require("./dashboard-routes");

// router.use("/", userRoutes);
// router.use("/models/comment.js", commentRoutes);
// router.use("/", postRoutes);
router.use("/", homeRoutes);
// router.use("api/", apiRoutes);
router.use("./dashboard", dashboardROutes);

module.exports = router;
