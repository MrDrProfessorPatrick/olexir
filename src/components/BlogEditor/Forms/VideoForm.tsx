'use client'
import { useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'
import type { BlockShown } from '../BlogEditor'
import getYouTubeEmbedUrl from '../../../app/lib/getYouTubeEmbedUrl'

interface VideoFormProps {
    postId: string
    blocksLength: number
    setAddBlockShown: Dispatch<SetStateAction<BlockShown | null>>
}

export default function VideoForm({
    postId,
    blocksLength,
    setAddBlockShown,
}: VideoFormProps) {
    const [loading, setLoading] = useState(false)
    const [formState, setFormState] = useState({
        title: '',
        text: '',
        videoUrl: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formState.videoUrl) return alert('Додайте посилання на відео')
        setLoading(true)

        try {
            const response = await fetch('/api/addpostblock', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    postId: postId,
                    title: formState.title,
                    text: formState.text,
                    videoUrl: formState.videoUrl,
                    blocksLength: blocksLength,
                    type: 'video',
                }),
            })

            if (response.ok) {
                alert('Відео блок створено!')
                setFormState({ title: '', text: '', videoUrl: '' })
                window.location.reload()
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (err) {
            console.error(err)
            alert('Помилка при створенні відео блоку')
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
                    <label htmlFor="videoUrl">Enter video link:</label>
                    <input
                        className="p-2 bg-[#BFC6C4] h-[40px] text-black"
                        id="videoUrl"
                        type="text"
                        placeholder="Add video link here..."
                        onChange={(e) => {
                            let link = getYouTubeEmbedUrl(e.target.value)
                            console.log('link', link)
                            setFormState((prev) => ({
                                ...prev,
                                videoUrl: link,
                            }))
                        }}
                    />
                </div>
                <textarea
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
                Add video block
            </button>
        </form>
    )
}
