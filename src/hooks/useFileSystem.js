import { useState } from 'react';

function useFileSystem() {
  const [fileName, setFileName] = useState('');
  const [currentPath, setCurrentPath] = useState(['root']);
  const [fileTree, setFileTree] = useState({ 'root': {} });
  const [currentPathFolders, setCurrentPathFolders] = useState({});

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const updateCurrentFolders = (path, tree) => {
    let newFolders = tree;
    for (let folder of path) {
      if (!newFolders[folder]) break;
      newFolders = newFolders[folder];
    }
    setCurrentPathFolders(newFolders);
  };

  const createNewFolder = () => {
    if (fileName.trim().length === 0) {
      console.log('Creating new folder in current path is not allowed');
      alert('Invalid folder name or folder already exists');
      return;
    }

    let updatedFileTree = JSON.parse(JSON.stringify(fileTree));
    let currentFolder = updatedFileTree;
    currentPath.forEach(folder => {
      if (!currentFolder[folder]) {
        console.error('Invalid path');
        return;
      }
      currentFolder = currentFolder[folder];
    });
    if (currentFolder[fileName.trim()]) {
      alert('Folder already exists');
      return;
    }
    currentFolder[fileName.trim()] = {};
    updateCurrentFolders(currentPath, updatedFileTree);
    setFileTree(updatedFileTree);
    setFileName('');
  };

  const openSelectedFolder = (folder) => {
    let folderIndex = currentPath.lastIndexOf(folder);
    let newPath = currentPath;
    if (folderIndex === -1) {
      newPath = [...currentPath, folder];
    } else {
      newPath = currentPath.slice(0, folderIndex + 1);
    }
    setCurrentPath(newPath);
    updateCurrentFolders(newPath, fileTree);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      createNewFolder();
    }
  };

  return {
    fileName,
    currentPath,
    currentPathFolders,
    handleFileNameChange,
    createNewFolder,
    openSelectedFolder,
    handleKeyDown,
  };
}

export default useFileSystem;
