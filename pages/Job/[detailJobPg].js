import React, { useContext } from "react";
import JobDetail from "../../components/JobDetail";
import { Store } from "../../Store";

function DetailJobPg() {
  const { state, dispatch } = useContext(Store);
  const { detailJob } = state;
  console.log("de", detailJob);
  return (
    <div>
      <JobDetail job={detailJob} />
    </div>
  );
}

export default DetailJobPg;
