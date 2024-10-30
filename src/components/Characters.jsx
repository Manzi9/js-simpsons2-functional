import React, { Component } from "react";
import Character from "./Character";

//prop drilling hell
class Characters extends Component {
  render() {
    return (
      <div className="characters">
        {this.props.characters.map((character, index) => {
          const {
            character: name,
            quote,
            image,
            liked,
            id,
            characterDirection,
          } = character;

          return (
            <Character
              key={id}
              id={id}
              name={name}
              quote={quote}
              image={image}
              liked={liked}
              characterDirection={characterDirection}
              onLikeToggle={this.props.onLikeToggle}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
