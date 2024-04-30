const models = require("../models");
const bcriptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("fastest-validator");

// User Registration controller
const signUp = async (req, res) => {
  try {
    // Check User exist or not
    const existUser = await models.User.findOne({
      where: { email: req.body.email },
    });

    if (existUser) {
      res.status(404).json({
        message: "User already exist!",
      });
    } else {
      // Hash the password
      bcriptjs.genSalt(10, (err, salt) => {
        bcriptjs.hash(req.body.password, salt, async (err, hash) => {
          const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
          };

          // Validation schema

          const schema = {
            name: { type: "string", optional: false, max: "100", min: "5" },
            email: { type: "string", optional: false, max: "50", min: "10" },
            password: { type: "number", optional: true, max: "50", min: "6" },
          };

          const valid = new validator();

          const validationResponse = valid.validate(user, schema);

          if (validationResponse !== true) {
            return res.status(400).json({
              message: "Validation failed!",
              error: validationResponse,
            });
          }

          // Create the new User
          const newUser = await models.User.create(user);

          if (newUser) {
            res.status(200).json({
              message: "User created successfully!",
              user: newUser,
            });
          } else {
            res.status(400).json({
              message: "Something went wrong!",
            });
          }
        });
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
      error: error,
    });
  }
};

// User Login controller

const signIn = async (req, res) => {
  try {
    const existUser = await models.User.findOne({
      where: { email: req.body.email },
    });

    if (existUser === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      // compare the password
      bcriptjs.compare(
        req.body.password,
        existUser.password,
        async (err, result) => {
          if (result) {
            // generate token
            const token = jwt.sign(
              {
                email: existUser.email,
                userId: existUser.id,
              },
              process.env.JWT_KEY,
              (err, token) => {
                res.status(200).json({
                  message: "Authentication successful!",
                  token: token,
                });
              }
            );
          } else {
            res.status(401).json({
              message: "Invalid credentials!",
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
      error: error,
    });
  }
};

// User Logout controller

const logOut = async (req, res) => {
  try {

    
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
      error: error,
    });
  }
};

module.exports = { signUp, signIn, logOut };
