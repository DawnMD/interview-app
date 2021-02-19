import React, { Component } from "react";

class AddItemInput extends Component {
  render() {
    return (
      <div>
        <form className="ui form" style={{ marginTop: "10px" }}>
          <div className="field">
            <label>{`Add item to ${this.props.ListLabel} list`}</label>
            <input />
            <div style={{ marginTop: "10px" }}>
              <button
                className="ui primary button"
                onClick={this.OnButtonClick}
              >
                Add List
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItemInput;
