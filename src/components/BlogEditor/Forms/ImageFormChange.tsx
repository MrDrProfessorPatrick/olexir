'use client'
import { useState } from 'react'
import Image from 'next/image'

import type { Dispatch, SetStateAction } from 'react'
import type { BlockShown } from '../BlogEditor'

interface ImageFormChangeProps {
    postBlockId: string
    title?: string | null
    text?: string | null
    imageUrl?: string | null
    setCustomizeBlock: Dispatch<SetStateAction<string>>
}

export default function ImageFormChange({
    postBlockId,
    title,
    text,
    imageUrl,
    setCustomizeBlock,
}: ImageFormChangeProps) {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<File | null>(null)
    const [formState, setFormState] = useState({
        title: title || '',
        text: text || '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            let imageUploadedUrl = imageUrl || ''
            if (image) {
                imageUploadedUrl = await uploadImageToAzure(image)
            }

            const response = await fetch('/api/changepostblock', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: postBlockId,
                    title: formState.title,
                    text: formState.text,
                    imageUrl: imageUploadedUrl,
                    type: 'image',
                }),
            })

            if (response.ok) {
                alert('Блок змінено!')
                setFormState({ title: '', text: '' })
                setImage(null)
                window.location.reload()
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (err) {
            console.error(err)
            alert('Помилка при зміні блоку')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border bg-black border-white relative py-4 px-2 rounded-xl z-2"
        >
            <button
                onClick={() => {
                    setCustomizeBlock('')
                }}
                className="absolute bg-[red] rounded-sm pt-1 pb-1 pl-2 pr-2 right-1 cursor-pointer"
            >
                X
            </button>
            <div className="grid gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="title">Enter title:</label>
                    <input
                        className="p-2 bg-[#BFC6C4] h-[40px] text-black"
                        id="title"
                        type="text"
                        value={formState.title}
                        onChange={(e) => {
                            setFormState((prev) => ({
                                ...prev,
                                title: e.target.value,
                            }))
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image">Enter image:</label>
                    {imageUrl && !image && (
                        <Image
                            className="w-full h-auto object-contain mb-2"
                            src={imageUrl}
                            alt="Current image"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    )}
                    <input
                        className="p-2 bg-[#BFC6C4] text-black"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>
                <textarea
                    value={formState.text}
                    onChange={(e) => {
                        setFormState((prev) => ({
                            ...prev,
                            text: e.target.value,
                        }))
                    }}
                    placeholder="Write text..."
                    className="w-full p-2 text-black bg-[#BFC6C4] resize-y"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 cursor-pointer"
            >
                Change image block
            </button>
        </form>
    )
}

async function uploadImageToAzure(file: File): Promise<string> {
    return '/ContactModalBG.webp'
}
