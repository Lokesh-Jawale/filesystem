import './App.css';
import Breadcrumb from './components/Breadcrumb';
import FileSystem from './components/FileSystem';
import useFileSystem from './hooks/useFileSystem';

function App() {
  const {
    fileName,
    currentPath,
    currentPathFolders,
    handleFileNameChange,
    createNewFolder,
    openSelectedFolder,
    handleKeyDown
  } = useFileSystem();

  return (
    <div className="App">
      <h1>File System</h1>

      <Breadcrumb currentPath={currentPath} openSelectedFolder={openSelectedFolder} />

      <div className='filecreate-container'>
        <input
          value={fileName}
          onChange={handleFileNameChange}
          onKeyDown={handleKeyDown}
          type="text"
          className='input-file-name'
          placeholder='File Name'
        />
        <button onClick={createNewFolder}>Create</button>
      </div>

      {Object.keys(currentPathFolders)?.length !== 0 ? (
        <FileSystem folders={currentPathFolders} openSelectedFolder={openSelectedFolder} />
      ) : (
        <div>No Folders in current Folder</div>
      )}
    </div>
  );
}

export default App;
