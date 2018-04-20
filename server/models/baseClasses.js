module.exports = function (sequelize, DataTypes) {
  var ClassInfo = sequelize.define("ClassInfo", {
    class: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    features: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    cantrips: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    spellSlots: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    additionalTraits: {
      type: DataTypes.STRING(300),
      allowNull: false,
    }
  },
    { freezeTableName: true,
    tableName: "ClassInfo",
    timestamps: false
  });
  return ClassInfo;
};
