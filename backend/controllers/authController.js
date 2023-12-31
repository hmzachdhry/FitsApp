const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users, Profiles} = require('../models');

const secretkey = '1234';

// User signup
const signUp = async (req, res, next) => {
  const {username, password, email} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates user
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
