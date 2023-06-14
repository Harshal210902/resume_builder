import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import SectionList from './components/SectionList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

function App() {
  const[section, setSection] = useState("");
  const[sections, setSections] = useState([]);
  const[comp,setComp] = useState([])
  const handleAdd = (e)=>{
    e.preventDefault();
    if(section)
    {
    setSections([...sections,{id:Date.now(), section:section, isDone: false}])
    setSection("");
    }
  };
  const onDragEnd = (result) =>{
    const {source,destination} = result;
    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;

    let add;
    let active = sections;
    let complete = comp;

    // 
    if (source.droppableId === "SectionsList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "SectionsList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setComp(complete);
    setSections(active);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className="heading">Select Your Sections</span>
      <InputField section={section} setSection={setSection} handleAdd={handleAdd}/>
      <SectionList sections={sections} setSections={setSections} comp={comp} setComp={setComp} />
    </div>
    </DragDropContext>
    
  );
}

export default App;
