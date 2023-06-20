import useGame from "../hooks/useGame";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
}

export const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error } = useGame(selectedGenre);
  return (
    <>
      {error && <div>{error}</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
