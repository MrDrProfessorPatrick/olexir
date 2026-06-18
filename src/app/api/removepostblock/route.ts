import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'
import prisma from '../../lib/prisma'

export async function POST(req: NextRequest) {
    try {
        // const { userId } = getAuth(req)
        const userId = true

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await req.json()
        const { id } = body

        if (!id) {
            return NextResponse.json(
                { error: 'ID of the post block not found' },
                { status: 400 }
            )
        }

        const postBlock = await prisma.postBlock.delete({
            where: {
                id: id,
            },
        })

        return NextResponse.json(postBlock, { status: 200 })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
