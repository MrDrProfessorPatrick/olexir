interface TextFormProps {
    title: string
    text: string
}

export default function TextForm({ title, text }: TextFormProps) {
    return (
        <>
            <input type="text" />
            <textarea
                key={block.id}
                value={block.text}
                onChange={(e) =>
                    updateBlock(block.id, {
                        text: e.target.value,
                    })
                }
                placeholder="Write text..."
                className="w-full p-4 bg-zinc-900 text-white resize-none"
            />
        </>
    )
}
