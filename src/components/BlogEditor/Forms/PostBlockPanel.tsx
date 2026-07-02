import type { Dispatch, SetStateAction } from 'react'
import { RefreshCw, Trash2 } from 'lucide-react'

interface PostBlockPanelProps {
    blockId: string
    setCustomizeBlock: Dispatch<SetStateAction<string>>
}

export function PostBlockPanel({
    blockId,
    setCustomizeBlock,
}: PostBlockPanelProps) {
    async function handleDelete(blockId: string) {
        const response = await fetch('/api/removepostblock', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: blockId,
            }),
        })
        if (response.ok) {
            alert(`Deleted entity with ${blockId}!`)
            window.location.reload()
        } else {
            const error = await response.json()
            throw new Error(error.message)
        }
    }

    return (
        <div className="absolute z-1000 right-5 top-5">
            <button
                className="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                onClick={() => {
                    setCustomizeBlock(blockId)
                }}
            >
                <RefreshCw />
            </button>
            <button
                className="right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                onClick={() => {
                    handleDelete(blockId)
                }}
            >
                <Trash2 />
            </button>
        </div>
    )
}
