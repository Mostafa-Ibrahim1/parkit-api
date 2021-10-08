const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const signUpRoute = require("./routers/signup-router");
const logInRoute = require("./routers/login-router");
const protect = require("./middlewares/auth-middlewares/protect-middleware");
const userRoute = require("./routers/users/user-all-router");
const userAdminRoute = require("./routers/users/user-admin-router");
const floorAdminRoute = require("./routers/floor-admin/floor-admin-router");
const reserveAndCheckOutSlotRoute = require("./routers/getavailable-reserve-checkout-slot/getavailable-reserve-checkout-router");
const displayRouter = require("./routers/vehicle-slot-floor-display/display-router");
const authRole = require("./middlewares/auth-middlewares/auth-role-middleware");
const roleCardIdValidator = require("./middlewares/role-cardId-validator/role-cardId-validator-middleware.js");
dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/signup", roleCardIdValidator, signUpRoute);
app.use("/login", logInRoute);
app.use("/api/v1", protect, userRoute);
app.use("/api/v1", protect, reserveAndCheckOutSlotRoute);
app.use("/api/v1/display", protect, displayRouter);
app.use("/api/v1", protect, authRole, userAdminRoute);
app.use("/api/v1", protect, authRole, floorAdminRoute);

const connectToDB = () => {
  mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
  });
  console.log("DB connected".bold.yellow);
};
app.listen(port, async () => {
  console.log(`Server is up on ${port}`.yellow.bold);
  await connectToDB();
});
