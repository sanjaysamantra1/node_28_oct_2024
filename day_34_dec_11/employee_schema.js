const mongoose = require('mongoose');

// Create Employee Schema
let employeeSchema = new mongoose.Schema({
    eId: { type: Number, required: true },
    name: { type: String, required: true },
    sal: { type: Number, required: true },
    gender: { type: String, required: true }
})

// Mr. Miss middleware
employeeSchema.pre('save', async function (next) {
    const user = this;
    user.name = user.gender ==='male' ? `Mr. ${user.name}` : `Miss. ${user.name}`;
    next();
});


// Create Employee Model
let employeeModel = mongoose.model("employees", employeeSchema);

module.exports = employeeModel;