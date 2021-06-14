let Express = require("express");
let router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { JournalModel } = require("../models");

router.get('/practice', validateJWT, (req, res) => {
    res.send('Hey!! This is a practice route!')
});

/*
======================
    Journal Create
======================
*/
router.post("/create", validateJWT, async(req, res) => {
    const { title, date, entry } = req.body.journal;
    const { id } = req.user;
    const journalEntry = {
        title,
        date,
        entry,
        owner: id
    }
    try {
        const newJournal = await JournalModel.create(journalEntry);
        res.status(200).json(newJournal);
    } catch (err) {
        res.status(500).json({ error: err });
    }
    JournalModel.create(journalEntry)
});

router.get('/about', (req, res) => {
    res.send('This is the about route!')
});

module.exports = router;