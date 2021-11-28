import { useState } from "react";
import styled from "styled-components";
import { SearchResults } from "../search-results/search-results";

const SearchGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        autoFocus
        className="w-full rounded-full h-10 px-6 border-none"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mt-8">
        <h2 className="font-semibold text-sm text-gray-400">Results</h2>
        <SearchGrid className="mt-4">
          <SearchResults searchTerm={searchTerm} />
        </SearchGrid>
      </div>
    </div>
  );
}
