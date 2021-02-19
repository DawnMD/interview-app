import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div role="list" className="ui divided relaxed list">
        <div role="listitem" className="item">
          <div className="content">
            <div className="header">{this.props.todoLabel}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
