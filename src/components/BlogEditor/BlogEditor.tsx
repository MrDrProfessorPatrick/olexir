'use client'

import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

import {
    type PostBlock as PrismaPostBlock,
    BlockType,
} from '../../generated/prisma/client'
import TextForm from './Forms/TextForm'
import ImageForm from './Forms/ImageForm'

export interface BlogEditorProps {
    postId: string
    blocks: PrismaPostBlock[]
}

export type BlockShown = 'text' | 'image' | 'video' | 'carusel'

export default function BlogEditor({ postId, blocks }: BlogEditorProps) {
    const [blockShown, setBlockShown] = useState<BlockShown | null>(null)
    const [customizeBlock, setCustomizeBlock] = useState<string>('')

    return (
        <div className="w-[60%]">
            {/* Blocks */}
            {blocks &&
                blocks.map((block) => {
                    if (block.type === 'TEXT') {
                        return block.id === customizeBlock ? (
                            <TextForm
                                postId={block.id}
                                title={block.title}
                                text={block.text}
                                setBlockShown={setBlockShown}
                            />
                        ) : (
                            <div>
                                <h2 className="text-[30px]">{block.title}</h2>
                                <div>{block.text}</div>
                                <button
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
                                    onClick={() => {
                                        setCustomizeBlock(block.id)
                                    }}
                                >
                                    Customize
                                </button>
                            </div>
                        )
                    }
                    if (block.type === 'IMAGE') {
                        return block.id === customizeBlock ? (
                            <div key={block.id} className="space-y-1">
                                <textarea
                                    className="w-full bg-zinc-900 text-white resize-none"
                                    value={block.title || ''}
                                />
                                <Image
                                    className="object-cover"
                                    src={block.imageUrl || ''}
                                    alt="Blog post title image"
                                    fill
                                />
                                <textarea
                                    value={block.text || ''}
                                    onChange={(e) => {}}
                                    placeholder="Write text..."
                                    className="w-full bg-zinc-900 text-white resize-none"
                                />
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-[30px]">{block.title}</h2>
                                <div className="relative">
                                    <Image
                                        className="object-cover"
                                        src={block.imageUrl || ''}
                                        alt="Blog post title image"
                                        fill
                                    />
                                </div>
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
                        onClick={() => {
                            setBlockShown('image')
                        }}
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
                    <TextForm postId={postId} setBlockShown={setBlockShown} />
                )}
                {blockShown === 'image' && (
                    <ImageForm postId={postId} setBlockShown={setBlockShown} />
                )}
            </div>
        </div>
    )
}
