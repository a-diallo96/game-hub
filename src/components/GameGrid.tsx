import useGame from "../hooks/useGame";

export const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      <h1>Game list </h1>
      {error && <div>{error}</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
