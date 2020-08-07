import React from 'react';
import Navigation from '../components/navigation'

export const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center pa-3' style={{ width: '100vw', height: '100vh' }}>
            <div className='absolute b-primary 60vh'></div>
            <Navigation />

            {/* MAIN CONTENT */}
            <div className='w100 flex-1'>
                {children}
            </div>
        </div>
    )
} 
