const mongoose = require("mongoose");

module.exports = {
    validateMongoDbId: (id) => {
        return mongoose.Types.ObjectId.isValid(id);
    }
};