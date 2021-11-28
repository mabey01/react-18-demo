import { SearchResultItem } from "./search-result-item";
import QuerySearchResults from "../queen-search-results.json";
import { startTransition, useEffect, useState, useTransition } from "react";

type ArtistResults = typeof QuerySearchResults["artists"]["items"];

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

interface SearchResultsProps {
  searchTerm: string;
}

export function SearchResults({ searchTerm }: SearchResultsProps) {
  const [results, setResults] = useState<ArtistResults>([]);

  useEffect(() => {
    if (searchTerm) {
      startTransition(() => {
        const results = QuerySearchResults.artists.items.filter((artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(results);
      });
    }
  }, [searchTerm]);

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
