import nc from "next-connect";
import Job from "../../../models/Job";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const job = await Job.findById(req.query.id);
  await db.disConnect();
  res.send(job);
});
export default handler;
