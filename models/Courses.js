"use strict";

module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define("Courses", {
    userId: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    estimatedTime: {
      type: DataTypes.STRING,
    },
    materialsNeeded: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize
  });
  return Courses;
};