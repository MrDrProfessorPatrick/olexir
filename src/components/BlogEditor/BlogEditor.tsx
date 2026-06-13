'use client'

import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import {
    type PostBlock as PrismaPostBlock,
    BlockType,
} from '../../generated/prisma/client'
import TextForm from './Forms/TextForm'

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
    postid: string
    blocks: StrictPostBlock[]
}

export type BlockShown = 'text' | 'image' | 'video' | 'carusel'

export default function BlogEditor({ postid, blocks }: BlogEditorProps) {
    const [blockShown, setBlockShown] = useState<BlockShown | null>(null)

    return (
        <div className="w-[60%]">
            {/* Toolbar */}
            <div className="flex flex-col gap-4">
                <button
                    onClick={() => {
                        setBlockShown('text')
                    }}
                    className="px-4 py-2 bg-white text-black"
                >
                    + Text
                </button>
                <button
                    onClick={() => {}}
                    className="px-4 py-2 bg-white text-black"
                >
                    + Image
                </button>
                <button
                    onClick={() => {}}
                    className="px-4 py-2 bg-white text-black"
                >
                    + Video
                </button>
                {blockShown === 'text' && (
                    <TextForm postid={postid} setBlockShown={setBlockShown} />
                )}
            </div>

            {/* Blocks */}
            <div className="space-y-8">
                {/* <input type="text" />
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
                /> */}
            </div>
        </div>
    )
}
