import React from 'react'
import '../styles/Breadcrumb.css';

const Breadcrumb = ({ currentPath, openSelectedFolder }) => {
    
    return (
        <div className='breadcrumb'>
            {currentPath.map((path, index) => (
                <div key={index}><span onClick={() => openSelectedFolder(path)}>{path}</span>/</div>
            ))}
        </div>
    )
}

export default Breadcrumb