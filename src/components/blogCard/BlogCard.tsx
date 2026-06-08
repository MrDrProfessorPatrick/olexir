import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
    slug: string
    title: string
    imgUrl: string
}

export default function BlogCard({ slug, title, imgUrl }: BlogCardProps) {
    return (
        // <Link href={slug} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col">
            <div>
                <Image
                    src={imgUrl}
                    alt="Blog post title image"
                    width={400}
                    height={200}
                />
            </div>
            <div>
                <h2>{title}</h2>
            </div>
        </div>
        // </Link>
    )
}
