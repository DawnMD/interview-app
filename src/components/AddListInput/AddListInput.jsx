import React, { Component } from "react";
import "./AddListInput.css";

class AddListInput extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: "", lists: [] };
  }
  OnButtonClick = (e) => {
    e.preventDefault();
    this.props.trackCards(this.state.listName);
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
            <input
              value={this.state.listName}
              onChange={this.OnInputChange}
              placeholder={this.props.placeholder}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                className="ui positive button"
                onClick={this.OnButtonClick}
              >
                {this.props.buttonVal}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddListInput;
