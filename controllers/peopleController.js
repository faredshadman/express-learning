const { people } = require("../data");
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};
const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
};
const getPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with ${id}` });
  }
  res.status(200).json({ success: true, data: person });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with ${id}` });
  }
  const updatedPeople = people.map((p) => {
    if (p.id === Number(id)) {
      p.name = name;
    }
    return p;
  });
  res.status(200).json({ success: true, data: updatedPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person with ${id} to delete` });
  }
  const updatedPeople = people.filter((p) => p.id !== Number(id));
  res.status(200).json({ success: true, data: updatedPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  getPerson,
  updatePerson,
  deletePerson,
};
