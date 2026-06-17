'use client'

import Image from 'next/image'
import { useState } from 'react'
import { RefreshCw } from 'lucide-react'

import {
    type PostBlock as PrismaPostBlock,
    BlockType,
} from '../../generated/prisma/client'
import TextForm from './Forms/TextForm'
import TextFormChange from './Forms/TextFormChange'
import ImageForm from './Forms/ImageForm'

export interface BlogEditorProps {
    postId: string
    blocks: PrismaPostBlock[]
}

export type BlockShown = 'text' | 'image' | 'video' | 'carusel'

export default function BlogEditor({ postId, blocks }: BlogEditorProps) {
    const [addBlockShown, setAddBlockShown] = useState<BlockShown | null>(null)
    const [customizeBlock, setCustomizeBlock] = useState<string>('')

    return (
        <div className="w-[60%]">
            {/* Blocks */}
            {blocks &&
                blocks.map((block) => {
                    if (block.type === 'TEXT') {
                        return block.id === customizeBlock ? (
                            <TextFormChange
                                postBlockId={block.id}
                                title={block.title}
                                text={block.text}
                                setCustomizeBlock={setCustomizeBlock}
                            />
                        ) : (
                            <div className="relative">
                                <h2 className="text-[30px]">{block.title}</h2>
                                <div>{block.text}</div>
                                <button
                                    className="absolute right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                                    onClick={() => {
                                        setCustomizeBlock(block.id)
                                    }}
                                >
                                    <RefreshCw />
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
                            setAddBlockShown('text')
                        }}
                        className="right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                    >
                        Add Text Block
                    </button>
                    <button
                        onClick={() => {
                            setAddBlockShown('image')
                        }}
                        className="right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                    >
                        Add Image
                    </button>
                    <button
                        onClick={() => {}}
                        className="right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                    >
                        Add Video
                    </button>
                </div>

                {addBlockShown === 'text' && (
                    <TextForm
                        postId={postId}
                        setAddBlockShown={setAddBlockShown}
                        blocksLength={blocks.length || 0}
                    />
                )}
                {addBlockShown === 'image' && (
                    <ImageForm
                        postId={postId}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
            </div>
        </div>
    )
}
