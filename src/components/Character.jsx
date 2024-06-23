import Name from "./Name";
import Name from "./Image";
import Name from "./Toggle";
import Name from "./Quote";

function Character({ character }, toggleLiked) {
  return (
    <>
      <Name name={character.name} />
      <Image image={character.image} />
      <Quote quote={character.quote} />
      <Toggle toggleLiked={toggleLiked} id={character.id} />
    </>
  );
}

export default Character;
