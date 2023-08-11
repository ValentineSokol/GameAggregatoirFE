import React from 'react';
import Image from "next/image";


export const Game = ({ children, game }) => {

    return (
        <article className='flex gap-3'>
            { game?.coverUrl && <Image src={game.coverUrl} alt={game.name} width={500} height={100} /> }
            <div>
                <h2 className="mb-1 font-bold">{game.name}</h2>
                <p className='mb-2'>{game.description}</p>
                {children}
            </div>
        </article>
    );
}
