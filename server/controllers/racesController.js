const db = require("../models");

const controller = {
  findAll: (req, res) => {
    db.BaseRaces.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.BaseRaces.create({
        race: req.body.race,
        speed: req.body.speed,
        size: req.body.size,
        language: req.body.language
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

export { controller as default };
