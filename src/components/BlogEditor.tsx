'use client'

import { useState } from 'react'
import { v4 as uuid } from 'uuid'

type Block =
    | { id: string; type: 'TEXT'; text: string }
    | { id: string; type: 'IMAGE'; imageUrl: string; caption?: string }

export default function BlogEditor() {
    const [blocks, setBlocks] = useState<Block[]>([])

    const addTextBlock = () => {
        setBlocks((prev) => [...prev, { id: uuid(), type: 'TEXT', text: '' }])
    }

    const addImageBlock = () => {
        setBlocks((prev) => [
            ...prev,
            { id: uuid(), type: 'IMAGE', imageUrl: '', caption: '' },
        ])
    }

    const updateBlock = (id: string, data: Partial<Block>) => {
        setBlocks((prev) =>
            prev.map((b) => (b.id === id ? { ...b, ...data } : b))
        )
    }

    return (
        <div className="space-y-6">
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
            </div>

            {/* Blocks */}
            <div className="space-y-8">
                {blocks.map((block) => {
                    if (block.type === 'TEXT') {
                        return (
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
                        )
                    }

                    if (block.type === 'IMAGE') {
                        return (
                            <div key={block.id} className="space-y-2">
                                <input
                                    value={block.imageUrl}
                                    onChange={(e) =>
                                        updateBlock(block.id, {
                                            imageUrl: e.target.value,
                                        })
                                    }
                                    placeholder="Image URL"
                                    className="w-full p-2 bg-zinc-900 text-white"
                                />
                                <input
                                    value={block.caption}
                                    onChange={(e) =>
                                        updateBlock(block.id, {
                                            caption: e.target.value,
                                        })
                                    }
                                    placeholder="Caption (optional)"
                                    className="w-full p-2 bg-zinc-900 text-white"
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
