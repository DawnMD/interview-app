import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <button class="ui positive button">{this.props.buttonText}</button>
      </div>
    );
  }
}
export default Buttons;
