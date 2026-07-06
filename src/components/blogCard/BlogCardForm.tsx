'use client'
import { useState } from 'react'

export function BlogCardForm({
    postId,
    title,
    createdAt,
}: {
    postId: string
    title: string
    createdAt: Date
}) {
    const [changedTitle, setTitle] = useState(title)
    const [changedDate, setChangedDate] = useState(
        new Date(createdAt.getTime() - createdAt.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16)
    )
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    async function uploadImageToAzure(file: File | null): Promise<string> {
        return '/ContactModalBG.webp'
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!title) return alert('Введіть заголовок поста')

        const imgUrl = await uploadImageToAzure(file)
        const response = await fetch('/api/changepost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: postId,
                title: changedTitle,
                imageFile: imgUrl,
                createdAt: changedDate,
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
            className="flex flex-col pt-18 p-2 gap-2 text-black h-full overflow-hidden"
        >
            <input
                type="text"
                value={changedTitle}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 rounded bg-white"
            />
            <input
                type="datetime-local"
                value={changedDate}
                onChange={(e) => setChangedDate(e.target.value)}
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
                className="mt-auto bg-green-600 text-white py-1 rounded"
            >
                Зберегти зміни
            </button>
        </form>
    )
}
