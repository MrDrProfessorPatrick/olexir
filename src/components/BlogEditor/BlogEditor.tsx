'use client'

import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import {
    type PostBlock as PrismaPostBlock,
    BlockType,
} from '../../generated/prisma/client'
import TextForm from './Forms/TextForm'

export interface BlogEditorProps {
    postid: string
    blocks: PrismaPostBlock[]
}

export type BlockShown = 'text' | 'image' | 'video' | 'carusel'

export default function BlogEditor({ postid, blocks }: BlogEditorProps) {
    const [blockShown, setBlockShown] = useState<BlockShown | null>(null)
    const [customizeBlock, setCustomizeBlock] = useState<string>('')

    return (
        <div className="w-[60%]">
            {/* Blocks */}
            {blocks &&
                blocks.map((block) => {
                    if (block.type === 'TEXT') {
                        return block.id === customizeBlock ? (
                            <div key={block.id} className="space-y-1">
                                <textarea
                                    className="w-full bg-zinc-900 text-white resize-none"
                                    value={block.title || ''}
                                />
                                <textarea
                                    value={block.text || ''}
                                    onChange={(e) => {}}
                                    placeholder="Write text..."
                                    className="w-full p-4 bg-zinc-900 text-white resize-y"
                                />
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-[30px]">{block.title}</h2>
                                <div>{block.text}</div>
                            </div>
                        )
                    }
                })}
            <div className="flex flex-col gap-4 mt-8">
                <div className="flex gap-2">
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
                </div>

                {blockShown === 'text' && (
                    <TextForm postid={postid} setBlockShown={setBlockShown} />
                )}
            </div>
        </div>
    )
}
