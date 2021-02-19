import React, { Component } from "react";
import AddListInput from "./components/AddListInput/AddListInput";
import ListCard from "./components/ListCard/ListCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  trackCards = async (cardArray) => {
    this.setState({ list: [...this.state.list, await cardArray] });
  };
  renderedListCards = () => {
    return this.state.list.map((card) => (
      <React.Fragment key={card}>
        <ListCard listLabel={card} />
      </React.Fragment>
    ));
  };

  render() {
    return (
      <div className="ui container">
        <AddListInput
          label="Name of todo list"
          placeholder="Homework"
          trackCards={this.trackCards}
          buttonVal="Add List"
        />
        {this.renderedListCards()}
      </div>
    );
  }
}

export default App;
