import Metrics from "./components/Metrics";
import SideBar from "./components/SideBar";
import "./scss/index.scss";

function App() {
  return <div className="dashboard">
    <SideBar />
    <Metrics />
  </div>;
}

export default App;
