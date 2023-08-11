import React from 'react';

export const GamesList = ({ games, Component, ...props }) => (
        <ul className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {games?.map((game) => <li className="mb-5" key={game.id}><Component game={game} {...props} /></li>)}
        </ul>
)
