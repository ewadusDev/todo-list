'use client'
import { useRef, useState } from 'react'
import ImageIcon from '../svg/ImageIcon'

type Props = {
    action: (formData: FormData) => void
}

export default function UploadBox({ id }: { id: string }) {
    const formRef = useRef<HTMLFormElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [filename, setFilename] = useState('')

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async () => {
        if (fileInputRef.current?.files?.length) {
            setFilename(fileInputRef.current.files[0].name)
            formRef.current?.requestSubmit()  // Programmatically submit the form
        }
    }

    return (
        <form
            ref={formRef}
            // action={action}
        >
            <input
                type="file"
                name="image"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className='hidden'
            />

            {/* This is the full-sized clickable button-like div */}
            <div
                onClick={handleClick}
                className="w-full bg-white rounded-[3px] mt-1 h-[66px] flex items-center px-5 gap-5 hover:cursor-pointer hover:bg-gray-100 transition"
            >

                <ImageIcon width={24} height={24} />
                <span>{filename ? filename : 'Add Image'}</span>
            </div>
        </form>
    )
}
