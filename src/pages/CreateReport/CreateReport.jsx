import Header from "../../components/Header/Header";
import ReportStep1 from "../../components/ReportStep1/ReportStep1";
import ReportStep2 from "../../components/ReportStep2/ReportStep2";
import ReportSteps from "../../components/ReportSteps/ReportSteps";
import "./createReport.scss"

const CreateReport = () => {
    return (<div className="creating-report">
        <Header></Header>
        <div className="steps-wrapper">

        <ReportSteps></ReportSteps>
        {/* <ReportStep1></ReportStep1> */}
        <ReportStep2></ReportStep2>
        </div>
    </div>);
}

export default CreateReport;