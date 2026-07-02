'use client'
import { useState } from 'react'

export function BlogCardForm({
    postId,
    title,
}: {
    postId: string
    title: string
}) {
    const [changedTitle, setTitle] = useState(title)
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    async function uploadImageToAzure(file: File): Promise<string> {
        return '/ContactModalBG.webp'
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!file || !title) return alert('Заповніть усі поля')

        const imgUrl = await uploadImageToAzure(file)
        const response = await fetch('/api/changepost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                postId: postId,
                title: changedTitle,
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
            onSubmit={(e) => {
                handleSubmit(e)
            }}
            className="mt-18 flex flex-col gap-2 text-black"
        >
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 rounded bg-white"
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
                id="file-upload"
            />
            <label
                htmlFor="file-upload"
                className="p-2 rounded bg-white cursor-pointer inline-block"
            >
                {file ? file.name : 'Обрати файл'}
            </label>
            <button
                type="submit"
                className="bg-green-600 text-white py-1 rounded"
            >
                Зберегти зміни
            </button>
        </form>
    )
}
