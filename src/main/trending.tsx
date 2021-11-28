export function Trending() {
  return (
    <div>
      <h5 className="text-sm text-gray-500 font-semibold">Whats Hot</h5>
      <h1 className="text-4xl mt-2 font-bold tracking-wide">Trending</h1>
      <div className="relative mt-2 rounded-xl overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80"
        />

        <div className="relative pt-12 px-6 pb-12 bg-gradient-to-r from-white">
          <div className="text-sm text-gray-400">Artist</div>
          <h3 className="text-3xl font-semibold w-32">On top of the world</h3>
          <div className="mt-4 space-x-4">
            <button className="border border-black bg-black text-white px-4 py-2 text-sm rounded-full uppercase">
              Play
            </button>
            <button className="border border-black px-4 py-2 text-sm rounded-full uppercase">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
