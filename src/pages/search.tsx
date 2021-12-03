import {
  ChangeEvent,
  lazy,
  memo,
  Suspense,
  useState,
  useTransition,
} from "react";
import styled from "styled-components";

import { createResultsResource } from "../utils/search-results-resource";

const SearchGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;

  @media (min-width: 1200px) {
    gap: 32px;
  }
`;

const LazySearchResults = lazy(
  () => import("../search-results/search-results")
);
const SearchResults = memo(LazySearchResults);

const initialResource = createResultsResource("");

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resource, setResource] = useState(initialResource);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    startTransition(() => {
      setResource(createResultsResource(newSearchTerm, 1_000));
    });
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
          {isPending && (
            <div className="flex items-center text-gray-400 text-xs border rounded p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="ml-1">rendering</span>
            </div>
          )}
        </header>
        <SearchGrid className="mt-4">
          <Suspense fallback={<div>Searching</div>}>
            <SearchResults resource={resource} />
          </Suspense>
        </SearchGrid>
      </div>
    </div>
  );
}
