import Header from "../../components/Header/Header";
import Report from "../../components/Report/Report"

const Reports = () => {
  return (
    <div className="reports">
      <Header></Header>
      {[1,2,3,4,5].map(e => <Report></Report>)}
    </div>
  );
};

export default Reports;
