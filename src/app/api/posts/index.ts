// app/api/posts/route.ts
import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'
import prisma from '../../lib/prisma'

export async function POST(req: NextRequest) {
    try {
        const { userId } = getAuth(req)
        
        if (!userId) {
            return NextResponse.json(
                { error: 'Unauthorized' }, 
                { status: 401 }
            )
        }

        const body = await req.json()
        const { title, imageFile } = body

        if (!title) {
            return NextResponse.json(
                { error: 'Title is required' }, 
                { status: 400 }
            )
        }

        const post = await prisma.post.create({
            data: {
                title: title,
                imgUrl: imageFile,
            },
        })

        return NextResponse.json(post, { status: 201 })

    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' }, 
            { status: 500 }
        )
    }
}
