import React, { Component } from "react";
import ListCard from "./components/ListCard/ListCard";
import AddListInput from "./components/AddListInput/AddListInput";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ui container">
        <AddListInput label="Add List" />
        {/* <ListCard /> */}
      </div>
    );
  }
}

export default App;
