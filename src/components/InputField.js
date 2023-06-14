import React, { useRef } from "react";
import "./styles.css";
export default function InputField({section, setSection,handleAdd}) {
    const inputRef = useRef(null)
  return (
    <form className="input" onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        type="input"
        value={section}
        onChange={
            (e)=>setSection(e.target.value)
        }
        placeholder="Add More Section"
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
}
