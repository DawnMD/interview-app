import React, { Component } from "react";

class ListItem extends Component {
  onButtonClick() {}
  render() {
    return (
      <div role="list" className="ui divided relaxed list">
        <div role="listitem" className="item">
          <div className="content">
            <div className="header ui grid">
              <span>{this.props.todoLabel}</span>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
