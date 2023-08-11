import React from 'react';
import Image from "next/image";
import {Button} from "@/components/Button/Button";
import {useClaimGame} from "@/api/useClaimGame";

export const Game = ({ game }) => {
    const { mutate, isLoading } = useClaimGame(game?.id);

    return (
        <article className='flex gap-3'>
            { game?.coverUrl && <Image src={game.coverUrl} alt={game.name} width={500} height={100} /> }
            <div>
                <h2 className="mb-1 font-bold">{game.name}</h2>
                <p className='mb-2'>{game.description}</p>
                <span>Ключів залишилось: {game?.keyCount}</span>
                { !!game?.keyCount && <Button disabled={isLoading} onClick={mutate} className="mx-1">Отримати гру!</Button>}
            </div>
        </article>
    );
}
