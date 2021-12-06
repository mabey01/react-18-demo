import { shuffle } from "./shuffle";
import { ArtistResults, artistsSearchResults } from "../data";

export async function fetchSearchResult(searchTerm: string, timeout = 1_000) {
  return new Promise<ArtistResults>((resolve) => {
    setTimeout(() => {
      const results = [...artistsSearchResults];
      const shuffledResults = shuffle(results);

      resolve(shuffledResults);
    }, timeout);
  });
}
