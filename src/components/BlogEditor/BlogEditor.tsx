'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import {
    type PostBlock as PrismaPostBlock,
    BlockType,
} from '../../generated/prisma/client'
import { PostBlockPanel } from './Forms/PostBlockPanel'
import TextForm from './Forms/TextForm'
import TextFormChange from './Forms/TextFormChange'
import ImageForm from './Forms/ImageForm'
import ImageFormChange from './Forms/ImageFormChange'
import VideoForm from './Forms/VideoForm'
import VideoFormChange from './Forms/VideoFormChange'
import { SortableBlock } from './SortableBlock'

export interface BlogEditorProps {
    postTitle: string
    postId: string
    blocks: PrismaPostBlock[]
}

export type BlockShown = 'text' | 'image' | 'video' | 'carusel'

export default function BlogEditor({
    postTitle,
    postId,
    blocks: initialBlocks,
}: BlogEditorProps) {
    const [blocksState, setBlocksState] =
        useState<PrismaPostBlock[]>(initialBlocks)
    const [addBlockShown, setAddBlockShown] = useState<BlockShown | null>(null)
    const [customizeBlock, setCustomizeBlock] = useState<string>('')

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const handleDragEnd = useCallback(
        async (event: DragEndEvent) => {
            const { active, over } = event

            if (!over || active.id === over.id) return

            setBlocksState((prev) => {
                const oldIndex = prev.findIndex(
                    (block) => block.id === active.id
                )
                const newIndex = prev.findIndex(
                    (block) => block.id === over.id
                )

                if (oldIndex === -1 || newIndex === -1) return prev

                const reordered = arrayMove(prev, oldIndex, newIndex)

                const payload = reordered.map((block, index) => ({
                    id: block.id,
                    position: index + 1,
                }))

                fetch('/api/reorderpostblocks', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ blocks: payload }),
                }).catch((err) =>
                    console.error('Failed to persist reorder:', err)
                )

                return reordered
            })
        },
        []
    )

    return (
        <div className="min-h-[1200px] w-[60%]">
            <h1 className="text-[36px] text-center">{postTitle}</h1>
            {/* Blocks */}
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={blocksState.map((b) => b.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {blocksState.map((block) => (
                        <SortableBlock key={block.id} id={block.id}>
                            {block.type === 'TEXT' ? (
                                block.id === customizeBlock ? (
                                    <TextFormChange
                                        postBlockId={block.id}
                                        title={block.title}
                                        text={block.text}
                                        setCustomizeBlock={setCustomizeBlock}
                                    />
                                ) : (
                                    <div className="relative py-4">
                                        <div className="flex">
                                            <div>
                                                <h2 className="text-[30px]">
                                                    {block.title}
                                                </h2>
                                            </div>
                                            <PostBlockPanel
                                                blockId={block.id}
                                                setCustomizeBlock={
                                                    setCustomizeBlock
                                                }
                                                entity="postblock"
                                            />
                                        </div>
                                        <div>{block.text}</div>
                                    </div>
                                )
                            ) : block.type === 'IMAGE' ? (
                                block.id === customizeBlock ? (
                                    <ImageFormChange
                                        postBlockId={block.id}
                                        title={block.title}
                                        text={block.text}
                                        imageUrl={block.imageUrl}
                                        setCustomizeBlock={setCustomizeBlock}
                                    />
                                ) : (
                                    <div className="relative flex flex-col max-w-full py-4">
                                        <div className="flex">
                                            <div>
                                                <h2 className="text-[30px]">
                                                    {block.title}
                                                </h2>
                                            </div>

                                            <PostBlockPanel
                                                blockId={block.id}
                                                setCustomizeBlock={
                                                    setCustomizeBlock
                                                }
                                                entity="postblock"
                                            />
                                        </div>
                                        <figcaption>
                                            <Image
                                                className="w-full h-auto object-contain"
                                                src={block.imageUrl || ''}
                                                alt="Blog post title image"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                            />
                                            <figcaption>
                                                {block.text}
                                            </figcaption>
                                        </figcaption>
                                    </div>
                                )
                            ) : (
                                <>
                                    {block.id === customizeBlock ? (
                                        <VideoFormChange
                                            postBlockId={block.id}
                                            title={block.title}
                                            text={block.text}
                                            videoUrl={block.videoUrl}
                                            setCustomizeBlock={
                                                setCustomizeBlock
                                            }
                                        />
                                    ) : (
                                        <div className="relative flex flex-col items-center justify-center max-w-full py-4">
                                            <div className="flex">
                                                <h2 className="text-[30px]">
                                                    {block.title}
                                                </h2>
                                                <PostBlockPanel
                                                    blockId={block.id}
                                                    setCustomizeBlock={
                                                        setCustomizeBlock
                                                    }
                                                    entity="postblock"
                                                />
                                            </div>

                                            {block.videoUrl && (
                                                <figure className="w-full">
                                                    <iframe
                                                        className="w-full aspect-video"
                                                        src={block.videoUrl}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                    <figcaption>
                                                        {block.text}
                                                    </figcaption>
                                                </figure>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </SortableBlock>
                    ))}
                </SortableContext>
            </DndContext>
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
                        blocksLength={blocksState.length || 0}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
                {addBlockShown === 'image' && (
                    <ImageForm
                        postId={postId}
                        blocksLength={blocksState.length || 0}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
                {addBlockShown === 'video' && (
                    <VideoForm
                        postId={postId}
                        blocksLength={blocksState.length || 0}
                        setAddBlockShown={setAddBlockShown}
                    />
                )}
            </div>
        </div>
    )
}
