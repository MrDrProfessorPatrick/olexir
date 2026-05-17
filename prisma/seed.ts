import 'dotenv/config'
import { PrismaClient, Prisma, BlockType } from '../src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
})

const postData: Prisma.PostCreateInput[] = [
    {
        title: 'Getting Started with Olexir',
        imgUrl: '/images/getting-started.jpg',
        blocks: {
            create: [
                {
                    type: BlockType.TEXT,
                    title: 'Introduction',
                    text: 'Welcome to Olexir! This is your first post.',
                },
                {
                    type: BlockType.IMAGE,
                    imageUrl: '/images/hero.jpg',
                    className: 'w-full',
                },
            ],
        },
    },
    {
        title: 'Advanced Features',
        imgUrl: '/images/advanced.jpg',
        blocks: {
            create: [
                {
                    type: BlockType.TEXT,
                    title: 'Deep Dive',
                    text: 'Explore the advanced capabilities of the platform.',
                },
            ],
        },
    },
]

export async function main() {
    console.log('Seeding database...')

    for (const data of postData) {
        await prisma.post.create({ data })
    }

    console.log('Seeding complete.')
}

main()
