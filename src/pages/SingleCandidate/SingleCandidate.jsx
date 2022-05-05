import Header from "../../components/Header/Header";
import TableRow from "../../components/TableRow/TableRow";
import avatar from "../../images/UserAvatar.png";
import "./singleCandidate.scss";

const SingleCandidate = () => {
  return (
    <div className="single-candidate">
      <Header></Header>
      <div className="user">
        <div className="user-data">
          <img src={avatar} alt="avatar"></img>
          <div className="name-and-email">
            <h3>Name:</h3>
            <h3>Email:</h3>
          </div>
          <div className="dob-and-education">
            <h3>Date of birth:</h3>
            <h3>Education:</h3>
          </div>
        </div>
        <div className="reports">
          <h2>Reports</h2>
          <table className="reports-table">
            <tr>
              <td>Company</td>
              <td>Interview Date</td>
              <td>Status</td>
            </tr>
          </table>
          {[1, 2, 3, 4, 5].map((e) => (
              <TableRow></TableRow>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;
