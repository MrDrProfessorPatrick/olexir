'use client'
import { useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'
import type { BlockShown } from '../BlogEditor'

interface ImageFormProps {
    postId: string
    title?: string
    text?: string
    setAddBlockShown: Dispatch<SetStateAction<BlockShown | null>>
}

export default function ImageForm({
    postId,
    title,
    text,
    setAddBlockShown,
}: ImageFormProps) {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<File | null>(null)
    const [formState, setFormState] = useState({ title: '', text: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!image) return alert('Додайте зображення')
        setLoading(true)

        try {
            const imageUrl = await uploadImageToAzure(image)

            const response = await fetch('/api/addpostblock', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postid: postId,
                    title: formState.title,
                    text: formState.text,
                    imageUrl: imageUrl,
                    type: 'image',
                }),
            })

            if (response.ok) {
                alert('Пост з картинкою створено!')
                setFormState({ title: '', text: '' })
                setImage(null)
                window.location.reload()
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (err) {
            console.error(err)
            alert('Помилка при створенні поста')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="border border-white relative py-4 px-2 rounded-xl"
        >
            <button
                onClick={() => {
                    setAddBlockShown(null)
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
                    <input
                        className="p-2 bg-[#BFC6C4] text-black"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>
                <textarea
                    value={text}
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
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 cursor-pointer"
            >
                Add image block
            </button>
        </form>
    )
}

async function uploadImageToAzure(file: File): Promise<string> {
    return '/ContactModalBG.webp'
}
