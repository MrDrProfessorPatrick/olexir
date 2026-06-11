'use client'
import {
    type PostBlock as PrismaPostBlock,
    BlockType,
} from '../../generated/prisma/client'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

// type TextBlock = { id: string; type: 'TEXT'; title: string; text: string }
// type ImageBlock = {
//     id: string
//     type: 'IMAGE'
//     title: string
//     text: string
//     imageUrl: string
//     caption?: string
// }
// type VideoBlock = {
//     id: string
//     type: 'VIDEO'
//     title: string
//     text: string
//     imageUrl: string
//     caption?: string
// }
// type CaruselBlock = {
//     id: string
//     title: string
//     text: string
//     type: 'CARUSEL'
// }

interface TextBlock extends Omit<PrismaPostBlock, 'type' | 'text'> {
    type: typeof BlockType.TEXT
    text: string
}

interface ImageBlock extends Omit<PrismaPostBlock, 'type' | 'imageUrl'> {
    type: typeof BlockType.IMAGE
    imageUrl: string
}

interface VideoBlock extends Omit<PrismaPostBlock, 'type' | 'videoUrl'> {
    type: typeof BlockType.VIDEO
    videoUrl: string
}

export type StrictPostBlock = TextBlock | ImageBlock | VideoBlock

export interface BlogEditorProps {
    blocks: StrictPostBlock[]
}

export default function BlogEditor({ blocks }: BlogEditorProps) {
    const [blockShown, setBlockShown] = useState(false)
    const [textBlock, setTextBlock] = useState<TextBlock | null>(null)

    return (
        <div className="w-[60%]">
            {/* Toolbar */}
            <div className="flex gap-4">
                <button
                    onClick={addTextBlock}
                    className="px-4 py-2 bg-white text-black"
                >
                    + Text
                </button>
                <button
                    onClick={addImageBlock}
                    className="px-4 py-2 bg-white text-black"
                >
                    + Image
                </button>
                <button
                    onClick={addImageBlock}
                    className="px-4 py-2 bg-white text-black"
                >
                    + Video
                </button>
            </div>

            {/* Blocks */}
            <div className="space-y-8">
                <input type="text" />
                <textarea
                    key={block.id}
                    value={block.text}
                    onChange={(e) =>
                        updateBlock(block.id, {
                            text: e.target.value,
                        })
                    }
                    placeholder="Write text..."
                    className="w-full p-4 bg-zinc-900 text-white resize-none"
                />
            </div>
        </div>
    )
}
