import React, { useState } from 'react';

import './App.css';

import Header from './components/Header'

function App() {

  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-End web']);
  
  function handleAddProject(){
    setProjects([...projects, `novo valor ${Date.now()}`]);
  }
 
  return (
    <>
      
      <Header title="Projects"/>  

      <ul>
        {projects.map(project => <li key={project} >{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    
  );
}

export default App;
