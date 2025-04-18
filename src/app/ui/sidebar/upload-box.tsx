'use client'
import { useActionState, useRef, useState, startTransition, useEffect } from 'react'
import ImageIcon from '../svg/ImageIcon'
import { uploadImage } from '@/lib/actions'
import Image from 'next/image'



export default function UploadBox({ id, image }: { id?: string, image?: string }) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [filename, setFilename] = useState('')
    const [preview, setPreview] = useState<string | null>(null)
    const initialState = { errors: {}, message: '' }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, formAction] = useActionState(uploadImage, initialState)

    useEffect(() => {
        setPreview(image || null)
    }, [image])


    if (id === undefined) return (<>Not found id</>)


    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = async () => {
        const file = fileInputRef.current?.files?.[0]
        if (!file) return console.log("not found image file")

        setFilename(file.name)

        const reader = new FileReader()
        reader.onloadend = () => {
            const base64 = reader.result as string
            setPreview(base64)

            const formData = new FormData()
            formData.append('image', base64)
            formData.append('id', id)

            startTransition(() => {
                formAction(formData)
            })
        }

        reader.readAsDataURL(file)
    }


    return (
        <form action={formAction} >
            <input
                type="file"
                name="image"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className='hidden'
            />

            <div className="w-full bg-white rounded-[3px] mt-1 h-[66px] flex items-center px-5 gap-5 hover:cursor-pointer hover:bg-gray-100 transition"
                onClick={handleClick}>
                {preview === null ? (<ImageIcon width={24} height={24} />) : (<Image src={preview} alt='preview' width={50} height={50} />)}
                <span>{filename ? filename : 'Add Image'}</span>
            </div>
        </form>
    )
}
