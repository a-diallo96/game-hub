import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";

export const GameGrid = () => {
  const { data, error } = useGame();
  return (
    <>
      {error && <div>{error}</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
