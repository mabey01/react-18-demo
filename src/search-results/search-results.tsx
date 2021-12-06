import { ArtistResults } from "../data";
import { AsyncResource } from "../utils/data-fetching-library";
import { SearchResultItem } from "./search-result-item";

interface SearchResultsProps {
  resource: AsyncResource<ArtistResults>;
}

export default function SearchResults({ resource }: SearchResultsProps) {
  const results = resource.read();

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
