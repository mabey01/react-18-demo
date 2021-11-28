import { Artist } from "./artist";
import { Shortcut } from "./shortcut";

export function Sidebar() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold">Shortcuts</h3>
        <ul className="mt-6 flex flex-wrap gap-3">
          <Shortcut>❄️ Chill Hits</Shortcut>
          <Shortcut>⭐️ Hop</Shortcut>
          <Shortcut>🎸 Accustic</Shortcut>
          <Shortcut>🎵 Indie Pop</Shortcut>
          <Shortcut>🎹 Piano Blues</Shortcut>
          <Shortcut>🎺 Jaz</Shortcut>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Fav Artist</h3>
        <ul className="mt-6 flex flex-col gap-3">
          <Artist name="Taylor Swift" description="196 songs in library" />
          <Artist name="Kanye West" description="124 songs in library" />
          <Artist name="Drake" description="83 songs in library" />
          <Artist name="Billie Eilish" description="12 songs in library" />
        </ul>
      </div>
    </div>
  );
}
