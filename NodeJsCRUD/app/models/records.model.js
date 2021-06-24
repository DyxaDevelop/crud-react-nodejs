module.exports = (sequelize, Sequelize) => {
  const Sportsman = sequelize.define("sports", {
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    sporttype: {
      type: Sequelize.STRING,
    },
    team: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    isAchiv: {
      type: Sequelize.BOOLEAN,
    },
    year: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  });

  return Sportsman;
};
