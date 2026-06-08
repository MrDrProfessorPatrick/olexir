import { auth } from '@clerk/nextjs/server'
import prisma from '../../lib/prisma'

import AddPostButton from '../../../components/AddPostButton'

export default async function Blog() {
    const { userId } = await auth()
    console.log('User ID:', userId)
    const posts = await prisma.post.findMany()
    console.log('posts', posts)
    return (
        <>
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                {true && <AddPostButton />}
                <div className="flex">BLOG CONTENT</div>
            </div>
        </>
    )
}
