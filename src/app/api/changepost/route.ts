import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'
import prisma from '../../lib/prisma'
import { slugify } from '@/app/lib/slugify'

export async function POST(req: NextRequest) {
    try {
        // const { userId } = getAuth(req)
        const userId = true

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { id, title, imageFile } = body

        if (!id) {
            return NextResponse.json(
                { error: 'Post ID is required' },
                { status: 400 }
            )
        }

        if (!title) {
            return NextResponse.json(
                { error: 'Title is required' },
                { status: 400 }
            )
        }

        const existingPost = await prisma.post.findUnique({
            where: { id },
        })

        if (!existingPost) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        const baseSlug = slugify(title)

        let uniqueSlug = baseSlug
        let isUnique = false
        let counter = 1

        while (!isUnique) {
            const postWithSlug = await prisma.post.findUnique({
                where: { slug: uniqueSlug },
            })

            if (!postWithSlug || postWithSlug.id === id) {
                isUnique = true
            } else {
                uniqueSlug = `${baseSlug}-${counter}`
                counter++
            }
        }

        const post = await prisma.post.update({
            where: { id },
            data: {
                title: title,
                ...(imageFile !== '' && { imgUrl: imageFile }),
                slug: uniqueSlug,
            },
        })

        return NextResponse.json(post, { status: 200 })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
