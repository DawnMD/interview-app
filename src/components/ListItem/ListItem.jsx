import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { strike: "", isDone: false };
  }
  onButtonClickStrike = () => {
    this.setState({ strike: "line-through", isDone: true });
  };
  onButtonClickUndo = () => {
    this.setState({ strike: "", isDone: false });
  };
  render() {
    return (
      <div role="list" className="ui divided relaxed list">
        <div role="listitem" className="item">
          <div className="content">
            <div className="header ui grid">
              <span style={{ textDecoration: this.state.strike }}>
                {this.props.todoLabel}
              </span>
              {this.state.isDone ? (
                <button
                  className="ui mini green button"
                  onClick={() => {
                    this.onButtonClickUndo();
                  }}
                >
                  Undo
                </button>
              ) : (
                <button
                  className="ui mini green button"
                  onClick={() => {
                    this.onButtonClickStrike();
                  }}
                >
                  Done
                </button>
              )}

              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
