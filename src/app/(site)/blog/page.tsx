import { auth } from '@clerk/nextjs/server'
import prisma from '../../lib/prisma'

import BlogCard from '@/components/blogCard/BlogCard'
import AddPostButton from '../../../components/AddPostButton'

export default async function Blog() {
    const { userId } = await auth()
    console.log('User ID:', userId)
    const posts = await prisma.post.findMany()
    console.log('posts', posts)
    return (
        <>
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <div className="flex">
                    {posts &&
                        posts.map(({ slug, imgUrl, title }) => (
                            <BlogCard
                                key={slug}
                                slug={slug}
                                imgUrl={imgUrl}
                                title={title}
                            />
                        ))}
                </div>
            </div>
            {true && <AddPostButton />}
        </>
    )
}
