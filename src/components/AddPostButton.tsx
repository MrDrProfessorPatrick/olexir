'use client'
export default function AddPostButton() {
    return (
        <div className="mb-10">
            <button
                onClick={() => console.log('Add Post clicked')}
                title="Create New Form"
                className="cursor-pointer group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-95"
            >
                <span className="text-3xl font-bold transition-transform duration-300 group-hover:rotate-90">
                    +
                </span>
                <span className="text-white-500 absolute bottom-[1rem] left-[1rem] w-[350px] text-xs text-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Click to add New Form
                </span>
            </button>
        </div>
    )
}
