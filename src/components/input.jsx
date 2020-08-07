import React from 'react';

export const Input = (props) => {
    let { className, ...others } = props;

    return (
        <div>
            <input className={`input ${className}`} {...others} className='input b-gray0 h-5 w-8 undefined' />
        </div>
    )
}