import React from 'react';
import {useMyKeys} from '@/api/useMyKeys';
import {ClaimedGame} from "@/components/Game/ClaimedGame";
import {GamesList} from "@/components/GamesList/GamesList";
export default function MyKeysPage() {
    const { keys } = useMyKeys();
    const games = keys?.map(key => ({ gameKey: key?.key, ...key.game }))
    return (
        <main>
           <GamesList games={games} Component={ClaimedGame} />
        </main>
    )
}
