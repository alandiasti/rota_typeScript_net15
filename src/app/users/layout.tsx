import React from 'react'

export default function Userlayout({
    children,

}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className='p-10 bg-blue-200 text-black'>Usuarios</div>
            {children}
        </>
    )
}
