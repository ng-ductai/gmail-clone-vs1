import React from 'react'
import './index.css'

const SidebarOptions = ({Icon, title, number, isActive}) => {
    return (
        <div className={`sidebarOptions ${isActive && `sidebarOptions--active`}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptions
