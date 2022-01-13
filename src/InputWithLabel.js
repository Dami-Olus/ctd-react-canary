import { useEffect, useRef } from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children, isFocused }) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        autoFocus
      />
    </>
  );
}

export default InputWithLabel;
