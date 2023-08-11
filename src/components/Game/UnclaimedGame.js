import React from "react";
import {Button} from "@/components/Button/Button";
import {Game} from "@/components/Game/Game";
import {useClaimGame} from "@/api/useClaimGame";

export const UnclaimedGame = ({ game }) => {
    const { mutate, isLoading } = useClaimGame(game?.id);
    return (
    <Game game={game}>
    <span>Ключів залишилось: {game?.keyCount}</span>
    { !!game?.keyCount && <Button disabled={isLoading} onClick={mutate} className="mx-1">Отримати гру!</Button>}
    </Game>
);
}
