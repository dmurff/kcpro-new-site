import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    }, {timestamps: true})

    const Customer = mongoose.models.Customer || mongoose.model("Customer, customerSchemsa")

    export default Customer 