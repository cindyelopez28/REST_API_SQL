"use strict";
// const { Models } = require("sequelize");
// const { Sequelize } = require(".");
 

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize
  });
  return Users;
};