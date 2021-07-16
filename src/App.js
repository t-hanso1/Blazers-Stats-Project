import React from "react";
import "./styles.css";
import "./MainForm.js";
import MainFormMaterialUI from "./MainFormMaterialUI.js";
// import ListData from "./ListData.js";
/*
 {
   fname: "",
   lname: "",              //Required
   radio_selection: false,
   max: false,            //At least one of (min, max, avg) Required
   min: false,
   avg: false,
   textarea: "",
   dropdown: "2019"       
 };
 
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
    this.handleArray = this.handleArray.bind(this);
  }

  handleArray(obj) {
    // Handler for lifting state
    var updated_array = this.state.array;
    updated_array.push(obj);
    this.setState({ array: updated_array });
    console.log(this.state.array);
    console.log("Lifted State");
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 id="main_header">
            PORTLAND TRAIL BLAZERS PLAYER STATISTICS (2019)
          </h1>
        </nav>
        <p>
          <strong>Purpose:</strong>{" "}
          <em>
            this web-app is intended as a tool for Portland Trail Blazers fans
            to get concise and comprehensive statistics on their favorite
            players on the team. It includes the ability to search for the
            player by name, select the desired season, filter statistics by min,
            max, average, include an image of the request player, and even
            provide feedback on the sites interface so that we can continue to
            improve.
          </em>
        </p>
        {/* Create MainForm component to display form
       elements, and pass hanldeArray so that we can lift state on submit. */}
        <MainFormMaterialUI onFormUpdate={this.handleArray} />
        <div>
          <h3>Length of Array: {this.state.array.length} </h3>
        </div>
        <div>
          <h3>Elements in Current Array: </h3>
          {/* Output All of the form data that was submitted as a drop-down list */}
          {/*<ListData output={this.state.array} />*/}
        </div>
      </div>
    );
  }
}
