import {useGames} from "@/api/useGames";
import Image from "next/image";
import {Button} from "@/components/Button/Button";
import {Game} from "@/components/Game/Game";
import {UnclaimedGame} from "@/components/Game/UnclaimedGame";
import {GamesList} from "@/components/GamesList/GamesList";

export default function Games() {
  const { games, isLoading } = useGames();

  return (
      <main>
        <div className="min-h-full">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Наші ігри</h1>
            </div>
          </header>
          <main>
            <GamesList games={games} Component={UnclaimedGame}  />
          </main>
        </div>
      </main>
  )
}
