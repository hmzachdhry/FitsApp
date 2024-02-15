const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const Profiles = require('../models/profiles');

const secretkey = '1234';
// app.post('/checkEmail', async (req, res) => {
//   const {email} = req.body;

//   try {
//     // Query the User table to check if a user with the specified email exists
//     const existingUser = await User.findOne({where: {email}});

//     // Send a response indicating whether the email exists
//     if (existingUser) {
//       res.json({exists: true}); // Email exists
//     } else {
//       res.json({exists: false}); // Email doesn't exist
//     }
//   } catch (error) {
//     console.error('Error checking email:', error);
//     res.status(500).json({error: 'Internal server error'});
//   }
// });
// User signup
const signUp = async (req, res, next) => {
  const {username, password, email} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates user. Think I need to add logic here that checks if the username and email exists and then send a response indicating true or false 
    const newUser = await Users.create({
      username,
      password: hashedPassword,
      email,
    });

    // Creates profile for the user
    const newProfile = await Profiles.create({
      user_id: newUser.id,
      location,
      phone_number,
    });

    res.status(201).json({user: newUser, profile: newProfile});
    return next();
  } catch (err) {
    return next({
      log: `The following error occurred in the signUp controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred while trying to create a new user',
      },
    });
  }
};

// User login
const login = async (req, res, next) => {
  const {username, password} = req.body;
  console.log({username, password, req, res, next});
  try {
    const user = await Users.findOne({
      where: {username},
    });

    if (!user) {
      return next({
        status: 401,
        message: {err: 'Invalid credentials'},
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({username}, secretkey, {expiresIn: '1h'});
      res.json({token});
    } else {
      res.status(401).json({error: 'Invalid credentials'});
    }
  } catch (err) {
    return next({
      log: `The following error occured in the login controller: ${err}`,
      status: 400,
      message: {err: 'An error occured while trying to login'},
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await Users.findAll({include: Profiles});
    res.status(201).json(allUsers);
    // res.locals.userList = allUsers;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured in the getallUsers controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occured while trying to grab the list of users',
      },
    });
  }
};

// Gets user
const getUserById = async (req, res, next) => {
  const {userId} = req.params;
  try {
    const user = await Users.findByPk(userId, {include: Profiles});
    if (!user) {
      return next({
        status: 404,
        message: {err: 'User not found'},
      });
    }
    res.status(200).json(user);
    return next();
  } catch (err) {
    return next({
      log: `The following error occurred in the getUserById controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred while trying to retrieve the user',
      },
    });
  }
};

// Delete user

module.exports = {signUp, login, getAllUsers, getUserById};
