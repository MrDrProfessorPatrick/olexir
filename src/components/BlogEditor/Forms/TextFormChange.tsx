'use client'
import { useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'
import type { BlockShown } from '../BlogEditor'

interface TextFormChangeProps {
    postBlockId: string
    title?: string | null
    text?: string | null
    setBlockShown: Dispatch<SetStateAction<BlockShown | null>>
}

export default function TextFormChange({
    postBlockId,
    title,
    text,
    setBlockShown,
}: TextFormChangeProps) {
    const [loading, setLoading] = useState(false)
    const [textState, setTextState] = useState({
        title: title || '',
        text: text || '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/changepostblock', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: postBlockId,
                    title: textState.title,
                    text: textState.text,
                    type: 'text',
                }),
            })

            if (response.ok) {
                alert('Блок змінено!')
                setTextState({ title: '', text: '' })
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
            className="border border-white relative py-4 px-2 rounded-xl"
        >
            <button
                onClick={() => {
                    setBlockShown(null)
                }}
                className="absolute bg-[red] rounded-sm pt-1 pb-1 pl-2 pr-2 right-1 cursor-pointer"
            >
                X
            </button>
            <div className="grid gap-4 mt-4">
                <div className="flex flex-col">
                    <label htmlFor="text">Enter title:</label>
                    <input
                        className="p-2 bg-[#BFC6C4] h-[40px] text-black"
                        id="text"
                        type="text"
                        value={textState.title}
                        onChange={(e) => {
                            setTextState((prev) => ({
                                title: e.target.value,
                                text: prev.text,
                            }))
                        }}
                    />
                </div>
                <textarea
                    value={textState.text}
                    onChange={(e) => {
                        setTextState((prev) => ({
                            title: prev.title,
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
                Change text block
            </button>
        </form>
    )
}
