import Image from 'next/image'
import Link from 'next/link'

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
        <div className="h-full rounded-2xl overflow-hidden">
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
