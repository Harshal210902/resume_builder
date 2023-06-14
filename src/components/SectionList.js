import React from 'react'
import "./styles.css";
import SingleSection from './SingleSection';
import { Droppable } from "react-beautiful-dnd";
export default function SectionList({sections,setSections,comp,setComp}) {
  return (
    // <div>
    <Droppable droppableId="SectionsList">
        {
            (provided)=>(
                <div className="sections" ref={provided.innerRef} {...provided.droppableProps}>
                    {sections.map((section,index)=>(
                    <SingleSection
                    index={index}
                    section={section}
                    key={section.id} 
                    sections={sections}
                    setSections={setSections}
                    />
                    ))}
                    {provided.placeholder}
                </div>
            )
        }
    </Droppable>
    // </div>
  );
};
