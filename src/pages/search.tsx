import { ChangeEvent, Suspense, useState } from "react";
import styled from "styled-components";
import { ArtistResults } from "../data";
import SearchResults from "../search-results/search-results";

import { fetchSearchResult } from "../utils/search-results-resource";

const SearchGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;

  @media (min-width: 1200px) {
    gap: 32px;
  }
`;

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ArtistResults>([]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const results = await fetchSearchResult(searchTerm);
    setResults(results);
  };

  return (
    <div>
      <input
        type="text"
        autoFocus
        className="w-full rounded-full h-10 px-6 border-none"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <div className="mt-8">
        <header className="flex items-center space-x-2 h-6">
          <h2 className="font-semibold text-base text-gray-500">Results</h2>
        </header>
        <SearchGrid className="mt-4">
          <Suspense fallback={<div>Searching</div>}>
            <SearchResults results={results} />
          </Suspense>
        </SearchGrid>
      </div>
    </div>
  );
}
