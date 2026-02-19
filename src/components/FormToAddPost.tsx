// components/FormToAddPost.tsx
"use client"

import { useState } from 'react'

export function FormToAddPost() {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file || !title) return alert("Заповніть усі поля")

        setLoading(true)

        try {
            const imageUrl = await uploadImageToAzure(file)

            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    imageFile: imageUrl
                }),
            })

            if (response.ok) {
                alert("Пост створено!")
                setTitle('')
                setFile(null)
                window.location.reload()
            } else {
                const error = await response.json()
                throw new Error(error.message)
            }
        } catch (err) {
            console.error(err)
            alert("Помилка при створенні поста")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg border border-gray-700 w-full max-w-md">
            <div className="mb-4">
                <label className="block mb-2 text-sm">Заголовок</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded bg-black border border-gray-600 focus:border-blue-500 outline-none text-white"
                    placeholder="Введіть назву..."
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-sm">Зображення</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
                {loading ? 'Завантаження...' : 'Створити пост'}
            </button>
        </form>
    )
}

async function uploadImageToAzure(file: File): Promise<string> {
    return "http://localhost:3000/mockedimage.jpg" 
}
