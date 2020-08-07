import React from 'react';
import Navigation from '../components/navigation'
import '../images/background-image.png'

export const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center pa-3' style={{ width: '100vw', height: '100vh' }}>
            <div className='absolute b-primary 60vh'>
                <img src='background-image.png' className='h-33 w-33 rotate'/>
            </div>
            <Navigation />

            {/* MAIN CONTENT */}
            <div className='w100 flex-1'>
                {children}
            </div>
        </div>
        
    )
} 
