import { auth } from '@clerk/nextjs/server'
import prisma from '../../lib/prisma'

import BlogCard from '@/components/blogCard/BlogCard'
import AddPostButton from '../../../components/AddPostButton'

export default async function Blog() {
    const authObj = await auth()
    // const { userId } = authObj
    const userId = 'USER_ID'
    console.log('User ID:', userId)
    const posts = await prisma.post.findMany()
    console.log('posts', posts)

    return (
        <>
            {true && (
                <div className="pt-30">
                    <AddPostButton />
                </div>
            )}
            <div className="min-h-[1200px] 2xl:w-[1240px] mx-auto pb-20">
                <div className="text-white items-center pt-30 px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {posts &&
                            posts.map(
                                ({
                                    slug,
                                    imgUrl,
                                    title,
                                    createdAt,
                                    isHidden,
                                    id,
                                }) => (
                                    <BlogCard
                                        userId={userId}
                                        postId={id}
                                        key={slug}
                                        slug={slug}
                                        imgUrl={imgUrl}
                                        title={title}
                                        createdAt={createdAt}
                                        isHidden={isHidden}
                                    />
                                )
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}
