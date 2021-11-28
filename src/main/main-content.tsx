import { Link } from "react-router-dom";
import { Trending } from "./trending";

export function MainContent() {
  return (
    <div>
      <div className="flex justify-between gap-12">
        <div className="flex items-center space-x-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        <Link to="/search">
          <input
            type="text"
            className="bg-white rounded-full border-none w-full h-10 px-6 placeholder-gray-300"
            placeholder="Search for artists, songs and ..."
          />
        </Link>
      </div>
      <div className="mt-8">
        <Trending />
      </div>
    </div>
  );
}
