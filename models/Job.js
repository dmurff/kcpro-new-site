import mongoose, { Schema } from "mongoose"

const jobSchema = new mongoose.Schema({
    jobType: {
        type: String,
        required: true,
        enum: ["hoop-install", "hoop-sold", "hoop-repair", "hoop-move"],
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    jobDate: {
        type: Date,
        required: true,
    },
    jobNotes: {
        type: String,
    },
    jobStatus: {
        type: String,

    },
    jobQuote: {
        type: Number,

    },
    

    },

{timestamps: true})

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema)

export default Job