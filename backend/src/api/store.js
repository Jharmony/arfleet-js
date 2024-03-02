const config = require('../config');
const utils = require('../utils');
const deployer = require('../client/deployer');

const store = async(req, res) => {
    try {
        const path = req.body.path;
        console.log("Storing path:", path);
    
        await deployer.store(path);

        res.send("Queued for storage: " + path);
    } catch (error) {
        console.error("Error storing path:", error.message);
        res.status(500).send("Error storing path: " + error.message);
    }
}

module.exports = {
    store
};