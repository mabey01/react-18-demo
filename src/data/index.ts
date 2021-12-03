import queenSearchResponse from "./queen-search-response.json";
import theBeatlesSearchResponse from "./the-beatles-search-response.json";

export type ArtistResults = typeof queenSearchResponse["artists"]["items"];

export const QuerySearchResults = queenSearchResponse;

export const artistsSearchResults: ArtistResults = [
  ...queenSearchResponse["artists"]["items"],
  ...theBeatlesSearchResponse["artists"]["items"],
];
