import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import CharacterControls from "./CharacterControls";

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
  render() {
    const { name, quote, image, characterDirection, id, liked, onLikeToggle } =
      this.props;

    if (characterDirection === "Left") {
      return (
        <div>
          <CharacterControls id={id} like={liked} onLikeToggle={onLikeToggle} />
          <Name name={name} />
          <Image imageUrl={image} imageAlt={name} />
          <Quote quote={quote} />
        </div>
      );
    }

    return (
      <div>
        <CharacterControls id={id} like={liked} onLikeToggle={onLikeToggle} />
        <Name name={name} />
        <Quote quote={quote} />
        <Image imageUrl={image} imageAlt={name} />
      </div>
    );
  }
}

export default Character;
