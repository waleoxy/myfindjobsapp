import nc from "next-connect";
import Job from "../../../models/Job";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const jobs = await Job.find({});
  await db.disConnect();
  res.send(jobs);
});
export default handler;
