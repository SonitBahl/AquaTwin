const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    avgwaterspeed: {
        type: Number,
        required: false
    },
    temperature: {
        type: Number,
        required: false
    },
    dissolved_oxygen: {
        type: Number,
        required: false
    },
    pH_level: {
        type: Number,
        required: false
    },
    salinity: {
        type: Number,
        required: false
    },
    turbidity: {
        type: Number,
        required: false
    },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users