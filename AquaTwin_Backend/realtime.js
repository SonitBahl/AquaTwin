require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Timeout after 5s
})
.then(() => console.log("MongoDB Connected to Atlas"))
.catch(err => console.error("MongoDB Atlas Connection Error:", err));

// Define the Schema
const UsersSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    record_number: Number,
    avgwaterspeed: Number,
    avgwaterdirection: Number,
    chlorophyll: Number,
    chlorophyll_quality: Number,
    temperature: Number,
    temperature_quality: Number,
    dissolved_oxygen: Number,
    dissolved_oxygen_quality: Number,
    pH_level: Number,
    pH_quality: Number,
    salinity: Number,
    salinity_quality: Number,
    spec_conductance: Number,
    spec_conductance_quality: Number,
    turbidity: Number,
    turbidity_quality: Number,
});

const User = mongoose.model('User', UsersSchema);


async function fetchData() {
    try {
        const count = await User.countDocuments(); // Get total document count
        if (count === 0) {
            console.log("No records found in the database.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * count); // Get a random index
        const randomUser = await User.findOne().skip(randomIndex); // Fetch random document

        console.log("Random Data at", new Date().toLocaleTimeString(), ":", randomUser);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    const users = await User.find();
    console.log(users);

}



// Run the function every 2 seconds
setInterval(fetchData, 2000);
