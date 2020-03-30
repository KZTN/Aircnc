const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { company, techs, price } = req.body;
    const { filename } = req.file;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);
    if (!user) {
      return res.json({ msg: "User does not exist" });
    }
    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(",").map((tech) => tech.trim()),
    });
    return res.json(spot);
  },
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    if (!spots) {
      return res.json({ msg: "No matches" });
    }
    return res.json(spots);
  },
};
