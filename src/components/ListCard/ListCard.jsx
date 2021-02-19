import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";
import AddItemInput from "../AddItemInput/AddItemInput";

class ListCard extends Component {
  constructor(props) {
    super(props);
    // this.state = { todosList: [] };
  }
  //   listState = async (lists) => {
  //     const itemList = await lists;
  //     this.setState({ todosList: itemList });
  //     // console.log(this.state.todosList);
  //   };
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.listLabel}</div>
          <AddItemInput
            ListLabel={this.props.listLabel}
            listState={this.listState}
          />
        </div>
        {/* <div className="content">
          <div className="ui feed">
            <div className="event">
              <div className="content">
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default ListCard;
