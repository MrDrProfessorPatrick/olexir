'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'

interface BlogCardProps {
    slug: string
    title: string
    imgUrl: string
    createdAt: Date
}

export default function BlogCard({
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
    return (
        <div className="relative h-full rounded-2xl overflow-hidden">
            <button
                className="absolute z-1000 right-2 top-1 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded cursor-pointer"
                onClick={() => {}}
            >
                <Trash2 />
            </button>
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
                        <div className="flex justify-end">{createdAtSrt}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
