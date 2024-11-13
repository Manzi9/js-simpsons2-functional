import React, { Component } from "react";

class CharacterControls extends Component {
  state = {};
  render() {
    console.log(this.props);
    const { liked, id, onLikeToggle } = this.props;
    return (
      <button
        onClick={() => onLikeToggle(id)}
        className={liked ? "character liked" : "character notLiked"}
      >
        {liked ? "Unlike" : "Like"}
      </button>
    );
  }
}

export default CharacterControls;
