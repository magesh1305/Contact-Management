const asyncHandler = require("express-async-handler");

//@desc Register a users
//@route GET /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc Login users
//@route GET /api/user/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc Login users
//@route GET /api/user/login
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
