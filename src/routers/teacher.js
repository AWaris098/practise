const express = require("express");
const router = new express.Router()
const Teacher = require("../models/teachers.js")



// Create teacher into routers

router.post("/teachers", (req, res) => {
    const user = new Teacher(req.body);
  
    user
      .save()
      .then(() => {
        return res.status(201).send(user);
      })
      .catch((e) => {
        if (e.code == 11000) {
          return res.status(500).json({ message: "Email already exists." });
        }
        res.status(400).json(e);
      });
  });
  
  // get or read Teachers
  
  router.get("/teachers", async (req, res) => {
    try {
      const users = await Teacher.find({});
      res.send(users);
    } catch (e) {
      res.send(e);
    }
  });
  
  // Get or read Teachers by their 'Id'
  
  router.get("/teachers/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const user = await Teacher.findById({ _id });
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
      console.log(res.send(e));
    }
  });
  
  router.patch("/teachers/:id", async (req, res) => {
    updates = Object.keys(req.body);
    allowedUpdates = ["name", "email", "age", "phone", "address"];
    isValidateOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidateOperation) {
      return res.status(404).send({ error: "Invalid updates" });
    }
    try {
      const user = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        isValidators: true,
      });
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });

//  DELETE DOCUMENT
router.delete('/teachers/:id',async(req, res) => {
  
  try{
      const teacher = await Teacher.findByIdAndDelete(req.params.id)
      if(!teacher){
       return res.status(404).json({error:"try another ID"})
      }
      res.json({teacher})
  }catch (e){
      res.status(400).json({e})
  }
});

module.exports = router
  