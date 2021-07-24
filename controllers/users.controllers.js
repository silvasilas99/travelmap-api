const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
    async hello (req, res) {
        try {
            res.status(200).json ({ message: "Hello, user. Welcome to users controllers!" });
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    async createUser (req, res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
            const newUser = new User({
              username: req.body.username,
              email: req.body.email,
              password: hashedPassword,
            });
        
            const user = await newUser.save();
            res.status(200).json(user._id);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async findUser (req, res) {
        try {
            const user = await User.findOne({ username: req.body.username });
            !user && res.status(400).json("Invalid username or password");
        
            const validPassword = await bcrypt.compare(
              req.body.password,
              user.password
            );
            !validPassword && res.status(400).json("Invalid username or password");
        
            res.status(200).json({ _id: user._id, username: user.username });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};