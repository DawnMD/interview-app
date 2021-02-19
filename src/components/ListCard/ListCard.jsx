import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";
import AddItemInput from "../AddItemInput/AddItemInput";

class ListCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.listLabel}</div>
          <AddItemInput ListLabel={this.props.listLabel} />
        </div>
        <div className="content">
          <div className="ui feed">
            <div className="event">
              <div className="content">
                <ListItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListCard;
