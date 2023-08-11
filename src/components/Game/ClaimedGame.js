import React, { useState } from 'react';
import {Game} from "@/components/Game/Game";
import {Button} from "@/components/Button/Button";

const activateLink = 'https://store.steampowered.com/account/registerkey?key=';
export const ClaimedGame = ({ game }) => {
    const [showKey, setShowKey] = useState(false);
    return (
        <Game game={game}>
            { showKey && <div className="font-bold">
                {game.gameKey}
                <Button href={`${activateLink}${game.gameKey}`} className="m-5">Активувати</Button>
            </div> }
            <Button onClick={() => setShowKey(prev => !prev)}>{ showKey? 'Сховати' : 'Показати'} ключ</Button>
        </Game>
    )
}
