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

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        emailFormat: false,
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const validateEmail = (email) => {
        // Simple but reliable regex for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value,
        })

        // Remove respective errors when typing
        setErrors({
            ...errors,
            [name]: false,
            ...(name === 'email' ? { emailFormat: false } : {}),
        })
    }

    const handleSubmit = async () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = true

        if (!formData.email.trim()) {
            newErrors.email = true
        } else if (!validateEmail(formData.email)) {
            newErrors.emailFormat = true
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return // Stop submitting
        }

        setLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    clientName: formData.name,
                    clientEmail: formData.email,
                    clientPhone: formData.phone,
                    clientMessage: formData.message,
                }),
            })

            if (!res.ok) throw new Error('Request failed')

            setSuccess(true)
            closePopup()
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="absolute bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center z-1000">
            <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-md"
                    onClick={closePopup}
                />

                <div className="relative w-full max-w-2xl bg-gradient-to-br from-yellow-700 via-amber-700 to-yellow-800 rounded-2xl shadow-2xl overflow-hidden bg-[url('/ContactModalBG.webp')] bg-cover bg-center">
                    <div className="relative p-8 md:p-12">
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                        >
                            ✕
                        </button>

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
                                    className={`w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800
                                        ${
                                            errors.name
                                                ? 'border-2 border-red-500'
                                                : ''
                                        }
                                    `}
                                />

                                <div className="flex flex-col">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800
                                            ${
                                                errors.email ||
                                                errors.emailFormat
                                                    ? 'border-2 border-red-500'
                                                    : ''
                                            }
                                        `}
                                    />
                                    {errors.emailFormat && (
                                        <p className="text-red-200 text-xs mt-1">
                                            Invalid email format
                                        </p>
                                    )}
                                </div>
                            </div>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800"
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 resize-none"
                            />

                            <div className="flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg disabled:opacity-50 cursor-pointer"
                                >
                                    {loading ? 'Sending...' : 'Partner With Us'}
                                </button>
                            </div>

                            {error && (
                                <p className="text-red-300 text-sm mt-2">
                                    {error}
                                </p>
                            )}
                            {success && (
                                <p className="text-green-300 text-sm mt-2">
                                    Message sent successfully!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
