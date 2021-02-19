import React, { Component } from "react";
import "./AddItemInput.css";

class AddItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: "" };
  }
  onButtonClick = (e) => {
    e.preventDefault();
    this.props.listState(this.state.todoItem);
    this.setState({ todoItem: "" });
  };
  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="ui form margin-t">
          <div className="field">
            <label>{`Add item to ${this.props.ListLabel.toUpperCase()} list`}</label>
            <input value={this.state.todoItem} onChange={this.onInputChange} />
            <div style={{ marginTop: "10px" }}>
              <button
                className="ui primary button"
                onClick={this.onButtonClick}
              >
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItemInput;
