module.exports = function(sequelize, DataTypes) {
  var BaseRaces = sequelize.define("BaseRaces", {
    race: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    speed: {
      type: DataTypes.VARCHAR(2),
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  });
  return BaseRaces;
};
