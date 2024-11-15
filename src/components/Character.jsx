import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import CharacterControls from "./CharacterControls";

function Character({
  name,
  quote,
  image,
  characterDirection,
  id,
  liked,
  onLikeToggle,
  onDelete,
}) {
  if (characterDirection === "Left") {
    return (
      //ID makes styling easier
      <div class={liked ? "character liked" : "character notLiked"}>
        <Name name={name} />
        <Image imageUrl={image} imageAlt={name} />
        <Quote quote={quote} />
        <CharacterControls
          id={id}
          liked={liked}
          onLikeToggle={onLikeToggle}
          onDelete={onDelete}
        />
      </div>
    );
  }

  return (
    <div class={liked ? "character liked" : "character notLiked"}>
      <Name name={name} />
      <Quote quote={quote} />
      <Image imageUrl={image} imageAlt={name} />
      <CharacterControls
        id={id}
        liked={liked}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Character;
