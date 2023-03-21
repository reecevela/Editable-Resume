import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import '../styles/EditableField.css'

const EditableField = (props) => {
    const [text, setText] = useState(props.initialText);
    const [editing, setEditing] = useState(false);
    
    const inputRef = useRef(null);

    // Toggle the editing state
    const toggleEdit = () => {
        setEditing(!editing);
    }

    // Handle the key press event
    const handleKeyPress = (e) => {
        // If the enter key is pressed and the input is in focus, toggle editing off
        if ((e.key === "Enter" || e.keyCode === 13) && inputRef.current === document.activeElement) {
            setEditing(false);
        }
    };

    // Handle the input change event
    const handleChange = (e) => {
        // If the enter key is pressed, toggle editing off
        if (e.key === 'Enter' || e.keyCode === 13) {
            setEditing(false);
            return
        }
        // Update the text state with the new value
        const inputText = e.target.value;
        setText(inputText);
    }
    
    const { element = 'div'} = props;
    if (props.children) {
        // If the component has children, render them with the specified element type
        // Mostly used for div's, ul's, etc.
        switch (element) {
            case "ul":
                return <ul>{props.children}</ul>
            case "ol":
                return <ol>{props.children}</ol>
            case "div":
            default:
                return <div>{props.children}</div>
        }
    }
    if (editing) {
        // If the component is in editing mode, render an input field and a check icon
        return (
            <div className="editable-field">
                <input 
                    ref={inputRef}
                    type="text" 
                    value={text} 
                    onChange={handleChange} 
                    onKeyPress={handleKeyPress}
                />
                <FontAwesomeIcon icon={faCheckCircle} onClick={toggleEdit} />
            </div>
        )
    } else {
        // If the component is not in editing mode, render the text and an edit icon
        return (
            <div className="editable-field">
                {React.createElement(element, {}, text)}
                <FontAwesomeIcon icon={faEdit} onClick={toggleEdit} />
            </div>
        )
    }
}

export default EditableField;
