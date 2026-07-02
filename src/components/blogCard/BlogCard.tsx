'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PostBlockPanel } from '../BlogEditor/Forms/PostBlockPanel'
import { BlogCardForm } from './BlogCardForm'

interface BlogCardProps {
    userId: string | null
    postId: string
    slug: string
    title: string
    imgUrl: string
    createdAt: Date
}

export default function BlogCard({
    userId,
    postId,
    slug,
    title,
    imgUrl,
    createdAt,
}: BlogCardProps) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })
    const createdAtSrt = formatter.format(createdAt)
    const [customizedPost, setCustomizePost] = useState<string>('')

    async function handleDeletePost(id: string) {
        const response = await fetch('/api/removepost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
            }),
        })

        if (response.ok) {
            alert(`Deleted entity with ${id}!`)
            window.location.reload()
        } else {
            const error = await response.json()
            throw new Error(error.message)
        }
    }

    return (
        <div className="relative h-full rounded-2xl overflow-hidden">
            {userId && (
                <PostBlockPanel
                    setCustomizeBlock={setCustomizePost}
                    blockId={postId}
                />
            )}
            {userId && customizedPost ? (
                <BlogCardForm postId={postId} title={title} />
            ) : (
                <Link
                    href={`/blog/${slug}`}
                    rel="noopener noreferrer"
                    className="flex h-full flex-col overflow-hidden"
                >
                    <div className="flex flex-col aspect-[1/1] w-full">
                        <div className="relative w-[100%] h-[100%]">
                            <Image
                                className="object-cover"
                                src={imgUrl}
                                alt="Blog post title image"
                                fill
                            />
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 bg-[#443199]">
                            <h2 className="text-2xl">{title}</h2>
                            <div className="flex justify-end">
                                {createdAtSrt}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}
