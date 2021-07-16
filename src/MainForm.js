import React from "react";
import "./styles.css";

export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      radio_selection: "no_show_img",
      max: false,
      min: false,
      avg: false,
      textarea: "",
      dropdown: "2019"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    let input;
    if (target.type === "text") {
      input = target.value;
    }
    if (target.type === "checkbox") {
      input = target.checked;
    }
    if (target.type === "radio") {
      input = target.value;
    }
    if (target.type === "select-one") {
      input = target.value;
    }
    if (target.type === "textarea") {
      input = target.value;
    }
    this.setState({ [name]: input });
  }

  handleSubmit(event) {
    var stat = this.state.min || this.state.max || this.state.avg;
    if (this.state.lname.trim().length > 0 && stat) {
      alert("Data Submitted for Processing");
      this.props.onFormUpdate(this.state); // Lifting state and passing data to parent
      this.handleReset();
    } else {
      alert(
        "Please provide a last name and check at least one statistic parameter (min, max, or average)"
      );
    }
    event.preventDefault();
  }

  handleReset(event) {
    this.setState({
      fname: "",
      lname: "",
      radio_selection: "no_show_img",
      max: false,
      min: false,
      avg: false,
      textarea: "",
      dropdown: "2019"
    });
  }

  render() {
    const season_options = ["2019", "2020"];
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Find Your Player</h3>
          First name:{" "}
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
          />{" "}
          &nbsp; Last name:{" "}
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>
            Season: &nbsp;
            <select
              type="dropdown"
              value={this.state.dropdown}
              name="dropdown"
              onChange={this.handleChange}
            >
              {/*
         Populate drop-down with array elements initialized
         at top
         */}
              {season_options.map(value => {
                const component = (
                  <option key={value} name="dropdown" value={value}>
                    {value}
                  </option>
                );

                return component;
              })}
            </select>{" "}
          </label>
          <br />
          <br />
          <label>
            MAX:
            <input
              type="checkbox"
              name="max"
              checked={this.state.max}
              onChange={this.handleChange}
            />{" "}
            &nbsp;{" "}
          </label>
          <label>
            MIN:
            <input
              type="checkbox"
              name="min"
              checked={this.state.min}
              onChange={this.handleChange}
            />{" "}
            &nbsp;{" "}
          </label>
          <label>
            AVG:
            <input
              type="checkbox"
              name="avg"
              checked={this.state.avg}
              onChange={this.handleChange}
            />{" "}
          </label>
          <br />
          <br />
          Include image:{" "}
          <input
            type="radio"
            name="radio_selection"
            value="show_img"
            checked={this.state.radio_selection === "show_img"}
            onChange={this.handleChange}
          />
          &nbsp; Don't include image:{" "}
          <input
            type="radio"
            name="radio_selection"
            value="no_show_img"
            checked={this.state.radio_selection === "no_show_img"}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <div id="feedback">
            <label>
              Feedback: &nbsp;
              <textarea
                type="textarea"
                name="textarea"
                value={this.state.textarea}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>{" "}
        </form>
      </div>
    );
  }
}
