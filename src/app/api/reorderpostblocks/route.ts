import prisma from '../../lib/prisma'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { blocks } = body as {
            blocks: { id: string; position: number }[]
        }

        if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
            return NextResponse.json(
                { error: 'Blocks array is required' },
                { status: 400 }
            )
        }

        await prisma.$transaction(
            blocks.map((block) =>
                prisma.postBlock.update({
                    where: { id: block.id },
                    data: { position: block.position },
                })
            )
        )

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('API Error in reorderpostblocks:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
