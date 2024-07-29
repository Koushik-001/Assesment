const express = require("express");
const router = express.Router();
const newLocal = "../models/Expense";
const Expense = require(newLocal);

router.post("/add", async (req, res) => {
  try {
    const { description, amount, splitMethod, participants } = req.body;
    const expense = new Expense({
      description,
      amount,
      splitMethod,
      participants,
    });
    await expense.save();
    res.status(201).send(expense);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const expenses = await Expense.find({
      "participants.user": req.params.userId,
    });
    res.send(expenses);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.send(expenses);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/balance-sheet", async (req, res) => {
  try {
    const expenses = await Expense.find({});

    let balanceSheet = {};

    expenses.forEach((expense) => {
      const { amount, splitMethod, participants } = expense;
      let sharePerParticipant = 0;

      if (splitMethod === "equal") {
        sharePerParticipant = amount / participants.length;
      }

      participants.forEach((participant) => {
        if (!balanceSheet[participant]) {
          balanceSheet[participant] = 0;
        }
        if (splitMethod === "equal") {
          balanceSheet[participant] += sharePerParticipant;
        }
      });
    });

    res.status(200).json(balanceSheet);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
