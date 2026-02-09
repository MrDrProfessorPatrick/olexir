import { auth } from '@clerk/nextjs/server'
import BlogEditor from '../../../../components/BlogEditor'

export default async function Blog() {
    const { userId } = await auth()
    console.log('User ID:', userId)
    return (
        <>
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                {userId && <BlogEditor />}
                <div className="flex">BLOG CONTENT</div>
            </div>
        </>
    )
}
