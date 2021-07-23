module.exports = {
    async hello (req, res) {
        try {
            res.status(200).json ({ message: "Hello, user. Welcome to users controllers!" });
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
};