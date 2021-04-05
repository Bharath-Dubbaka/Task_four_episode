import "./App.css";
import Heading from "./components/Heading";
import Labels from "./components/Labels";
import Top from "./components/Top";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Heading />
      <hr />
      <div className="dashboard_box">
        <Top />
        <Labels />
        <Table />
      </div>
    </div>
  );
}

export default App;
