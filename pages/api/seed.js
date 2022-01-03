import nc from "next-connect";
import Job from "../../models/Job";
import db from "../../utils/db";
import jobs from "../../utils/jobsData";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Job.deleteMany();
  await Job.insertMany(jobs.data);
  await db.disConnect();
  res.status(200).send({ message: "seeded successfully" });
});
export default handler;
