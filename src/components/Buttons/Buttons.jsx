import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <button
        className="ui mini red button"
        onClick={() => {
          this.onButtonClick(todo);
        }}
      >
        Delete
      </button>
    );
  }
}
export default Buttons;
