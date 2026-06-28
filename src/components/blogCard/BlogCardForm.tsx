'use client'
import { useState } from 'react'

export function BlogCardForm({ postId: string }) {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    async function uploadImageToAzure(file: File): Promise<string> {
        return '/ContactModalBG.webp'
    }

    async function handleSubmit() {
        e.preventDefault()
        if (!file || !title) return alert('Заповніть усі поля')
        const imageUrl = await uploadImageToAzure(file)
        const response = await fetch('/api/changepost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                postId: postId,
                title: title,
                imageFile: imgUrl,
            }),
        })

        if (response.ok) {
            alert('Пост Змінено!')
            window.location.reload()
        } else {
            const error = await response.json()
            throw new Error(error.message)
        }
    }
    return (
        <form
            onSubmit={() => {
                handleSubmit({ postId, title, imgUrl })
            }}
            className="mt-4 flex flex-col gap-2 text-black"
        >
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 rounded"
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="p-2 rounded"
            />
            <button
                type="submit"
                className="bg-green-600 text-white py-1 rounded"
            >
                Зберегти зміни
            </button>
        </form>
    )
}
