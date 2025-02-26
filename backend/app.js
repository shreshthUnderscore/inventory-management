const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const session = require("express-session");
app.use(express.json());
app.use(cors());
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const { User } = require("./model/model");

const PORT = 5000;

const mainRouter = require("./router/mainRouter");
const authRouter = require("./router/authRouter");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/inventoryExpress")
  .then(() => console.log("SERVER RUNNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"))
  .catch((error) => console.error("MongoDB connection error:", error));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect Username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect Password" });
      }
      return done(null, user);
    } catch (err) {
      done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use("/category", mainRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
