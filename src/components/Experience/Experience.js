import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const mapStateToProps = state => ({
  experienceData: state[0]
});

const Experience = props => {
  const [experienceData, setExperienceData] = React.useState(
    props.experienceData
  );
  const handleDelete = data => {
    const filteredData = experienceData.filter(d => d.id !== data.id);
    setExperienceData(filteredData);
  };
  console.log("props.experienceData", props.experienceData);
  const { length } = experienceData;
  if (length === 0)
    return (
      <h6 style={{ margin: "20px" }}>
        There is no any experience in the table
      </h6>
    );
  return (
    <div style={{ margin: "20px" }}>
      <h6>There are {length} experience in the data</h6>
      <Button variant="contained" color="primary" aria-label="add">
        Add
      </Button>{" "}
      <table className="table table-hover table-responsive-sm">
        <thead>
          <tr>
            <th>Company</th>
            <th>WorkExperience</th>
            <th>AttendingYear</th>
            <th>CompletionYear</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experienceData.map(data => (
            <tr key={data.id}>
              <td>{data.company}</td>
              <td>{data.workExperience}</td>
              <td>{data.attendingYear}</td>
              <td>{data.completionYear}</td>
              <td>
                <Button
                  aria-label="delete"
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(data)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(Experience);
