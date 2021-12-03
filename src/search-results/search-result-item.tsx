function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

interface SearchResultItemProps {
  artist: React.ReactNode;
  followers: number;
  imageSrc: string;
}

const format = new Intl.NumberFormat("en-AU").format;

export function SearchResultItem({
  artist,
  followers,
  imageSrc,
}: SearchResultItemProps) {
  sleep(3);

  return (
    <div>
      <img
        src={imageSrc}
        className="w-full h-48 object-cover rounded-lg bg-gray-500 border-none"
      />
      <div className="pt-2 pb-4">
        <div className="flex justify-between">
          <h3 className="text-md font-semibold">{artist}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>

        <div className="flex items-center text-sm text-gray-400">
          <span>{format(followers)}</span>
          <span className="ml-1">Followers</span>
        </div>
      </div>
    </div>
  );
}
