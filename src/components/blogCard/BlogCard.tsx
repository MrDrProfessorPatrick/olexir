import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
    slug: string
    title: string
    imgUrl: string
}

export default function BlogCard({ slug, title, imgUrl }: BlogCardProps) {
    return (
        <Link href={slug} target="_blank" rel="noopener noreferrer">
            <div className="flex row">
                <Image
                    src={imgUrl}
                    alt="Blog post title image"
                    width={800}
                    height={400}
                />
                <h2>title</h2>
            </div>
        </Link>
    )
}
