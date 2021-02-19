import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";

class AddItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: "", todos: [] };
  }
  onButtonClick = (e) => {
    e.preventDefault();
    this.setState({
      todos: [this.state.todoItem, ...this.state.todos],
      todoItem: "",
    });
    // this.props.listState(this.state.todos);
  };
  onInputChange = (e) => {
    this.setState({ todoItem: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="ui form" style={{ marginTop: "10px" }}>
          <div className="field">
            <label>{`Add item to ${this.props.ListLabel} list`}</label>
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
        {this.state.todos.map((todo) => (
          <ListItem key={todo} todoLabel={todo} />
        ))}
      </div>
    );
  }
}

export default AddItemInput;
