import React from "react";

import RecordCreator from './RecordCreator'
import RecordsTable from './RecordsTable'
import WorkCounter from "./WorkCounter";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui grid container">
      <div className="sixteen wide column">
        <Header />
      </div>
      <div className="twelve wide column">
        <RecordsTable />
      </div>
      <div className="four wide column">
        <RecordCreator />
      </div>
      <div className="sixteen wide column">
        <WorkCounter />
      </div>
    </div>
  );
};

export default App;
