import {
  ChangeEvent,
  lazy,
  memo,
  Suspense,
  useState,
  useTransition,
} from "react";
import styled from "styled-components";
import { ArtistResults } from "../data";
import { RenderingIndicator } from "../rendering-indicator/rendering-indicator";
import { AsyncResource } from "../utils/data-fetching-library";

import { createSearchResultsResource } from "../utils/search-results-resource";

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
const MemoSearchResults = memo(LazySearchResults);
const initialResultResource = createSearchResultsResource("");

// rendering visualisation -> https://miro.com/app/board/uXjVOdwBbM8=/
// fetch-on-render vs render-as-you-fetch -> https://remix.run/

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resource, setResource] = useState<AsyncResource<ArtistResults>>(
    initialResultResource
  );

  const [isPending, startTransition] = useTransition();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    startTransition(() => {
      setResource(createSearchResultsResource(searchTerm));
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
          {isPending && <RenderingIndicator />}
        </header>
        <SearchGrid className="mt-4">
          <Suspense fallback={<div>Searching</div>}>
            <MemoSearchResults resource={resource} />
          </Suspense>
        </SearchGrid>
      </div>
    </div>
  );
}
