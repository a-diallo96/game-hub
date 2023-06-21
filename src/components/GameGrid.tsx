import useGame, { Platform } from "../hooks/useGame";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error } = useGame(selectedGenre, selectedPlatform);
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
