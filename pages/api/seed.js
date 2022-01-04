import nc from "next-connect";
import Job from "../../models/Job";
import User from "../../models/User";
import db from "../../utils/db";
import jobs from "../../utils/jobsData";
import userData from "../../utils/userData";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(userData.users);
  await Job.deleteMany();
  await Job.insertMany(jobs.data);
  await db.disConnect();
  res.status(200).send({ message: "seeded successfully" });
});
export default handler;
