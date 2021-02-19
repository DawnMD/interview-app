import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";
import AddItemInput from "../AddItemInput/AddItemInput";

class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  listState = async (lists) => {
    this.setState({ todos: [...this.state.todos, await lists] });
    // console.log(this.state.todos);
  };
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">
            <strong>{this.props.listLabel.toUpperCase()}</strong>
          </div>
          <AddItemInput
            ListLabel={this.props.listLabel}
            listState={this.listState}
          />
        </div>
        <div className="content">
          <div className="ui feed">
            <div className="event">
              <div className="content">
                {this.state.todos.map((todo) => (
                  <ListItem key={todo} todoLabel={todo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListCard;
