import React from 'react';
import Image from "next/image";
import {Button} from "@/components/Button/Button";

export const Game = ({ game }) => {
    return (
        <article className='flex gap-3'>
            { game?.coverUrl && <Image src={game.coverUrl} alt={game.name} width={500} height={100} /> }
            <div>
                <h2 className="mb-1 font-bold">{game.name}</h2>
                <p className='mb-2'>{game.description}</p>
                <span>Ключів залишилось: {game?.keyCount}</span>
                { game?.keyCount && <Button className="mx-1">Отримати гру!</Button>}
            </div>
        </article>
    );
}
