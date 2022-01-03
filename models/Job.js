import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false },
    title: { type: String, required: true },
    company: { type: String, required: true },
    company_logo: { type: String, required: false },
    location: { type: String, required: true },
    category: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
    benefits: { type: String, required: false },
    type: { type: String, required: true },
    work_condition: { type: String, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
export default Job;
