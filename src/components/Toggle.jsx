function Toggle({ toggleLiked, id }) {
  return <button onClick={() => toggleLiked(id)} />;
}

export default Toggle;
