import React from 'react'
import { FaFolder } from 'react-icons/fa'
import '../styles/FileSystem.css';

const FileSystem = ({ folders, openSelectedFolder }) => {
  return (
    <>
        <h1>Current Path folders</h1>
        <div className='folder-container'>
            {Object.keys(folders).map((folder, index) => (
                <div key={index} onClick={() => openSelectedFolder(folder, true)}><FaFolder /> <span>{folder}</span></div>
            ))}
        </div>
    </>
  )
}

export default FileSystem