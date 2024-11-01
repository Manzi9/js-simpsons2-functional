import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./CharacterControls";

// function Character({
//   name,
//   quote,
//   image,
//   characterDirection,
//   id,
//   liked,
//   onLikeToggle,
//   onDelete,
// }) {
//   if (characterDirection === "Left") {
//     return (
//       //ID makes styling easier
//       <div
//         onClick={onLikeToggle}
//         class={liked ? "character liked" : "character not liked"}
//       >
//         <Name name={name} />
//         <Image imageUrl={image} imageAlt={name} />
//         <Quote quote={quote} />
//         <Controls
//           id={id}
//           liked={liked}
//           onLikeToggle={onLikeToggle}
//           onDelete={onDelete}
//         />
//       </div>
//     );
//   }

//   return (
//     <div
//       onClick={onLikeToggle}
//       class={liked ? "character liked" : "character not liked"}
//     >
//       <Name name={name} />
//       <Quote quote={quote} />
//       <Image imageUrl={image} imageAlt={name} />
//       <Controls
//         id={id}
//         liked={liked}
//         onLikeToggle={onLikeToggle}
//         onDelete={onDelete}
//       />
//     </div>
//   );
// }

class Character extends Component {
  state = { liked: false };

  onLikeToggle = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { name, quote, image, characterDirection } = this.props;
    const { liked } = this.state;

    if (characterDirection === "Left") {
      return (
        <div
          className={liked ? "character liked" : "character notLiked"}
          onClick={() => this.onLikeToggle("Hello")}
        >
          <Name name={name} />
          <Image imageUrl={image} imageAlt={name} />
          <Quote quote={quote} />
        </div>
      );
    }

    return (
      <div
        className={liked ? "character liked" : "character notLiked"}
        onClick={this.onLikeToggle}
      >
        <Name name={name} />
        <Quote quote={quote} />
        <Image imageUrl={image} imageAlt={name} />
      </div>
    );
  }
}

export default Character;
