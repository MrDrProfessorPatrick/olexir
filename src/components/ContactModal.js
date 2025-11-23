'use client'
import { useState } from 'react'
import { usePopup } from './PopUpProvider'

export default function ContactModal() {
    const { isOpen, closePopup } = usePopup()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = () => {
        closePopup()
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    if (!isOpen) return null

    return (
        <div className="absolute  bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center z-1000">
            {/* Modal Overlay */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-md"
                    onClick={closePopup}
                />

                {/* Modal Content */}
                <div className="relative w-full max-w-2xl bg-gradient-to-br from-yellow-700 via-amber-700 to-yellow-800 rounded-2xl shadow-2xl overflow-hidden bg-[url('/ContactModalBG.webp')] bg-cover bg-center">
                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-30" />

                    <div className="relative p-8 md:p-12">
                        {/* Close button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Title */}
                        <h2 className="text-4xl font-bold text-white mb-8">
                            Get in Touch
                        </h2>

                        {/* Form */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                />
                            </div>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
                            />

                            <div className="flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                                >
                                    Partner With Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
