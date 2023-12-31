const express = require("express");
const app = express();
const db = require("./db.js");
const path = require("path");
const jobsRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/usersRoute");
const adminRoutes = require("./routes/adminRoutes");
const employerRoutes = require("./routes/employerRoutes");

app.use(express.json());
app.use("/api/jobs/", jobsRoute);

app.use("/api/users/", userRoute);

app.use("/api/admin/", adminRoutes);
app.use("/api/employer/", employerRoutes);
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log("Node JS Server Started"));
