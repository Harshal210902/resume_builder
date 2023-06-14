import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { BsToggleOn } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrCircleInformation } from "react-icons/gr";
import "./styles.css";
import { Draggable } from "react-beautiful-dnd";


export default function SingleSection({
  index,
  section,
  sections,
  setSections,
}) {
  const [edit, setEdit] = useState(false);
  const [editSection, setEditSection] = useState(section.section);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, section: editSection } : section
      )
    );
    setEdit(false);
  };

  const handleDone = (id) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, isDone: !section.isDone } : section
      )
    );
  };
  return (
    <Draggable draggableId={section.id.toString()} index={index}>
    {(provided) => (
      <form
        className="sections_single"
        onSubmit={(e) => handleEdit(e, section.id)}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div className="iconleft">
        <span className="iconleftelement"><RxHamburgerMenu/></span>
        <span className="iconleftelement"><GrCircleInformation/></span>
        </div>
       
        {edit ? (
          <input
            value={editSection}
            onChange={(e) => setEditSection(e.target.value)}
            className="sections_single_text"
          />
        ) : (
          <span className="sections_single_text">{section.section}</span>
        )}

        <div>
          
          <span
            className="icon"
            onClick={() => {
              if (!edit && !section.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <MdEdit />
          </span>
          <span className="icon" onClick={() => handleDone(section.id)}>
            <BsToggleOn />
          </span>
        </div>
      </form>
    )}
  </Draggable>
  )
}
