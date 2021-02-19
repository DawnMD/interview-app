import React, { Component } from "react";
import "./AddListInput.css";
import ListCard from "../ListCard/ListCard";
import ListItem from "../ListItem/ListItem";

class AddListInput extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: "", lists: [] };
  }
  OnButtonClick = (e) => {
    e.preventDefault();
    this.setState({
      lists: [this.state.listName, ...this.state.lists],
      listName: "",
    });
  };
  OnInputChange = (e) => {
    this.setState({ listName: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="ui form margin-t">
          <div className="field">
            <label>{this.props.label}</label>
            <input value={this.state.listName} onChange={this.OnInputChange} />
            <div style={{ marginTop: "10px" }}>
              <button
                className="ui positive button"
                onClick={this.OnButtonClick}
              >
                Add List
              </button>
            </div>
          </div>
        </form>
        {this.state.lists.map((list) => (
          <ListCard key={list} listLabel={list} />
        ))}
      </div>
    );
  }
}

export default AddListInput;
