const bcrypt = require("bcryptjs");
const { User } = require("../model/model");

const signup = async function (req, res) {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      password: hashedPass,
    });
    res.status(200).json({ message: "signup successful" });
  } catch (err) {
    res.status(500).json({
      message: "signup failed",
      error: err.message,
      password: req.body.password,
    });
  }
};

const login = function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
};

module.exports = {
  signup,
  login,
};
