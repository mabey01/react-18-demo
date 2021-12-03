import { shuffle } from "./shuffle";
import { AsyncResource } from "./data-fetching-library";
import { ArtistResults, artistsSearchResults } from "../data";

async function fetchSearchResult(searchTerm: string, timeout: number) {
  return new Promise<ArtistResults>((resolve) => {
    console.log("START FETCHING");
    setTimeout(() => {
      const results = [...artistsSearchResults];
      const shuffledResults = shuffle(results);

      console.log("FETCHED DATA DONE");
      resolve(shuffledResults);
    }, timeout);
  });
}

export function createResultsResource(searchTerm: string, timeout = 2_000) {
  return new AsyncResource<ArtistResults>(
    fetchSearchResult(searchTerm, timeout)
  );
}
