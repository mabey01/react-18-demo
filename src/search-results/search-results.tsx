import { ArtistResults } from "../data";
import { SearchResultItem } from "./search-result-item";

interface SearchResultsProps {
  results: ArtistResults;
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <>
      {results.map((result) => (
        <SearchResultItem
          key={result.id}
          artist={result.name}
          imageSrc={result.images[0]?.url}
          followers={result.followers.total}
        />
      ))}
    </>
  );
}
