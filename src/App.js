import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      date: "",
    };
  }
  async UNSAFE_componentWillMount() {
    setInterval(async () => {
      await axios
        .get("http://localhost:5000/time")
        .then((response) => {
          console.log(response);
          this.setState({
            loading: false,
            date: response.data.date,
            time: response.data.time,
          });
        })
        .catch((error) => console.log(error));
    }, 1000);
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    else
      return (
        <div className="dt">
          <FontAwesomeIcon className="fai" icon={faCalendarDay} />
          <h1 className="txt">Date :{this.state.date}</h1>

          <FontAwesomeIcon className="fai" icon={faClock} />
          <h1 className="txt">Time :{this.state.time}</h1>
        </div>
      );
  }
}

export default App;
