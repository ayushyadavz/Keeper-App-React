import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpand, setIsExpand] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (!note.title && !note.content) {
      alert("Enter a note!")
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }

    event.preventDefault();
  }

  function expand(){
    setIsExpand(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)
        }
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          onClick={expand}
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
