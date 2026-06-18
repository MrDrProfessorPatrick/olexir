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
    return (
        <div className="absolute right-0 top-0">
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
                    setCustomizeBlock(blockId)
                }}
            >
                <Trash2 />
            </button>
        </div>
    )
}
