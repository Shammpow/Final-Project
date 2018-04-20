const db = require("../models");

const controller = {
  findOne: (req, res) => {
    db.ClassInfo.findOne({
      where: {
        class: req.query.class
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
