import React from "react";

const CharacterControls = ({ liked, id, onLikeToggle }) => {
  console.log({ liked, id, onLikeToggle });

  return (
    <button
      onClick={() => onLikeToggle(id)}
      className={liked ? "character liked" : "character notLiked"}
    >
      {liked ? "Unlike" : "Like"}
    </button>
  );
};

export default CharacterControls;
