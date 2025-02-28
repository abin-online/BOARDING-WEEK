import React, { useEffect, useState } from 'react'

const Input = () => {
    const [text, setText] = useState(() => {
        return localStorage.getItem(
            'text' || ''
        )
    })

    useEffect(() => {
        localStorage.setItem('text', text)
    }, [text])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-amber-200 shadow-lg rounded-lg p-6 w-80 min-h-[300px] border border-yellow-500">
                <textarea
                    className="w-full h-100 bg-transparent resize-none focus:outline-none text-gray-900 text-lg p-2 placeholder-gray-500"
                    placeholder="Write something..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={() => setText("")}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
                >
                    Clear
                </button>
            </div>
        </div>
    )
}

export default Input
