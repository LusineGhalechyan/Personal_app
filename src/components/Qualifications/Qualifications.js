import React from "react";
import { getData } from "../../Data/QualificationData";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Qualifications = () => {
  const [data, setData] = React.useState(getData());

  const handleDelete = e => {
    const index = data.indexOf(e);
    const datas = data.filter(d => d.id !== data[index].id);
    setData(datas);
  };
  const { length } = data;
  if (length === 0)
    return (
      <h6 style={{ margin: "20px" }}>
        There is no any qualification in the data
      </h6>
    );
  return (
    <div style={{ margin: "20px" }}>
      <h6> There are {length} qualifications in the data </h6>
      <table className="table table-hover table-responsive-sm">
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Attending Year</th>
            <th>Completion Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(data => (
            <tr key={data.id}>
              <td>{data.qualification}</td>
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

export default Qualifications;
