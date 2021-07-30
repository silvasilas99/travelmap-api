const Pin = require("../models/Pin");

module.exports = {
    async hello (req, res) {
        try {
            res.status(200).json ({ message: "Hello, user. Welcome to pins controllers!" });
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async createPin (req, res) {
        const newPin = new Pin(req.body);
        try {
            const savedPin = await newPin.save();
            res.status(200).json(savedPin);
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
    async getPins (req, res) {
        try {
            const pins = await Pin.find();
            res.status(200).json(pins);
        } catch (err) {
            res.status(500).json(err.message);
        }
    },
};