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
import ImageFormChange from './Forms/ImageFormChange'
import VideoForm from './Forms/VideoForm'
import VideoFormChange from './Forms/VideoFormChange'

export interface BlogEditorProps {
    postTitle: string
    postId: string
    blocks: PrismaPostBlock[]
}

export type BlockShown = 'text' | 'image' | 'video' | 'carusel'

export default function BlogEditor({
    postTitle,
    postId,
    blocks,
}: BlogEditorProps) {
    const [addBlockShown, setAddBlockShown] = useState<BlockShown | null>(null)
    const [customizeBlock, setCustomizeBlock] = useState<string>('')

    return (
        <div className="w-[60%]">
            <h1 className="text-[36px] text-center">{postTitle}</h1>
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
                            <ImageFormChange
                                postBlockId={block.id}
                                title={block.title}
                                text={block.text}
                                imageUrl={block.imageUrl}
                                setCustomizeBlock={setCustomizeBlock}
                            />
                        ) : (
                            <div className="relative flex flex-col max-w-full">
                                <h2 className="text-[30px]">{block.title}</h2>
                                <figcaption>
                                    <Image
                                        className="w-full h-auto object-contain"
                                        src={block.imageUrl || ''}
                                        alt="Blog post title image"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                    />
                                    <figcaption>{block.text}</figcaption>
                                </figcaption>

                                <button
                                    className="absolute z-1000 right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                                    onClick={() => {
                                        setCustomizeBlock(block.id)
                                    }}
                                >
                                    <RefreshCw />
                                </button>
                            </div>
                        )
                    }
                    if (block.type === 'VIDEO') {
                        return block.id === customizeBlock ? (
                            <VideoFormChange
                                postBlockId={block.id}
                                title={block.title}
                                text={block.text}
                                videoUrl={block.videoUrl}
                                setCustomizeBlock={setCustomizeBlock}
                            />
                        ) : (
                            <div className="relative flex flex-col items-center justify-center max-w-full">
                                <h2 className="text-[30px]">{block.title}</h2>
                                {block.videoUrl && (
                                    <figure className="w-full">
                                        <iframe
                                            className="w-full aspect-video"
                                            src={block.videoUrl}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        <figcaption>{block.text}</figcaption>
                                    </figure>
                                )}
                                <button
                                    className="absolute z-1000 right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                                    onClick={() => {
                                        setCustomizeBlock(block.id)
                                    }}
                                >
                                    <RefreshCw />
                                </button>
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
                        onClick={() => {
                            setAddBlockShown('video')
                        }}
                        className="right-0 top-0 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                    >
                        Add Video
                    </button>
                </div>

                {addBlockShown === 'text' && (
                    <TextForm
                        postId={postId}
                        blocksLength={blocks.length || 0}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
                {addBlockShown === 'image' && (
                    <ImageForm
                        postId={postId}
                        blocksLength={blocks.length || 0}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
                {addBlockShown === 'video' && (
                    <VideoForm
                        postId={postId}
                        blocksLength={blocks.length || 0}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
            </div>
        </div>
    )
}
