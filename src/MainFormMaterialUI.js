import React from "react";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";

export default class MainFormMaterialUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: " ",
      lname: " ",
      dropdown: "2019",
      radio_selection: "no_show_img",
      max: false,
      min: false,
      avg: false,
      textarea: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    console.log("handleChange called", name);
    console.log(target.type);

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
    console.log(input);
  }
  handleSubmit(event) {
    console.log("called handleSubmit");
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
    console.log("called handleReset");
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
    return (
      <div>
        <form onSubmit={this.handleChange}>
          <Container maxWidth="sm">
            <h3>Find Your Player</h3>
            <TextField
              name="fname"
              id="fname"
              label="First Name"
              variant="filled"
              onChange={this.handleChange}
            />{" "}
            &nbsp;
            <TextField
              name="lname"
              id="lname"
              label="Last Name"
              variant="filled"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <FormControl>
              <InputLabel>Season</InputLabel>
              <Select
                labelId="seasonOptions"
                name="dropdown"
                value={this.state.dropdown}
                onChange={this.handleChange}
              >
                <MenuItem value="2019">2019</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControlLabel
              control={
                <Checkbox onChange={this.handleChange} value="checkedA" />
              }
              label="Max"
              name="max"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={this.handleChange} value="checkedB" />
              }
              label="Min"
              name="min"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={this.handleChange} value="checkedC" />
              }
              label="Avg"
            />
            <br />
            <br />
            <FormControlLabel
              name="radio_selection"
              value="show_img"
              checked={this.state.radio_selection === "show_img"}
              control={<Radio />}
              label="Include Image"
              onChange={this.handleChange}
            />
            <FormControlLabel
              name="radio_selection"
              value="no_show_img"
              checked={this.state.radio_selection === "no_show_img"}
              control={<Radio />}
              label="Do Not Include Image"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="filled-basic"
              label="Feedback"
              variant="filled"
              multiline
              rows="4"
              name="feedback"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button
              onClick={this.handleSubmit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Button
              onClick={this.handleReset}
              variant="contained"
              color="secondary"
            >
              Reset
            </Button>
          </Container>
        </form>
      </div>
    );
  }
}
