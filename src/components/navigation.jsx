import React, { useContext, useState, useEffect } from 'react'
import { Button } from './buttons';
import { Icon } from './icon'
import { useHistory, useLocation } from 'react-router-dom';

export const Navigation = (props) => {
    let location = useLocation()
    const history = useHistory()

    return (
        <div className='w100 flex items-center flex-row b-primary'>
            <div className='flex items-center flex-row justify-start'>
                <Icon className='items-start' />
                <p>FINITE</p>
                <p className='font-montserrat fs-25 lh-30 c-gray items-end'>FAQ</p>
            </div>
            <div className='flex items-center flex-row justify-end'>
                <p className='font-montserrat fs-25 lh-30 c-gray items-end'>Login</p>
                <Button className='btn b-secondary c-default fs-20 lh-24'>Register</Button>
            </div>
        </div>
    )
}