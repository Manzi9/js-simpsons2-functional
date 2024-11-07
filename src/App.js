import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Characters";

class App extends Component {
  state = { totalLiked: 0 };

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    //fixes api data IDs to char
    data.forEach((element, index) => {
      element.id = index + 1;
    });
    this.setState({ simpsons: data });
  };

  onLiked = () => {
    this.setState({ totalLiked: this.state.totalLiked + 1 });
  };

  onLikeToggle = (id) => {
    const simpsons = [...this.state.simpsons];

    const indexOf = simpsons.findIndex((item) => {
      return item.id === id;
    });
    if (indexOf === -1) {
      console.log("Index shouldn't be negative!");
      return;
    }

    simpsons[indexOf].liked = !simpsons[indexOf].liked;
    this.setState({ simpsons });
  };

  render() {
    const { simpsons, totalLiked } = this.state;

    if (!simpsons) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <h1>Total liked: {totalLiked}</h1>
        <Characters characters={simpsons} onLikeToggle={this.onLikeToggle} />
      </>
    );
  }
}

export default App;
