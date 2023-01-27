const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getTrainerData = (req, res) => {
  mongodb
    .getDb()
    .db("poke-data")
    .collection("trainer-data")
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
};

const getTrainer = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid Trainer id to find Trainer.");
  }
  const userId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db("poke-data")
    .collection("trainer-data")
    .find({ _id: userId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result[0]);
    });
};

const createTrainer = async (req, res) => {
  const trainer = {
    name: req.body.name,
    gender: req.res.gender,
    number: req.body.number,
    badges: req.body.badges,
    height: req.body.height,
    weight: req.body.weight,
  };
  const response = await mongodb
    .getDb()
    .db("poke-data")
    .collection("trainer-data")
    .insertOne(trainer);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the Trainer."
      );
  }
};

const updateTrainer = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid Trainer id to update Trainer.");
  }
  const userId = new ObjectId(req.params.id);
  const trainer = {
    name: req.body.name,
    gender: req.res.gender,
    number: req.body.number,
    badges: req.body.badges,
    height: req.body.height,
    weight: req.body.weight,
  };
  const response = await mongodb
    .getDb()
    .db("poke-data")
    .collection("trainer-data")
    .replaceOne({ _id: userId }, trainer);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating the Trainer");
  }
};

const deleteTrainer = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use a valid Trainer id to delete Trainer.");
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDb()
    .db("poke-data")
    .collection("trainer-data")
    .deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while deleting the Trainer."
      );
  }
};

module.exports = {
  getTrainerData,
  getTrainer,
  createTrainer,
  updateTrainer,
  deleteTrainer,
};
