import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDawn(evt) {
    if (evt.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDawn}
        className="control"
      />
    </div>
  );
}

export default function FeedBack() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(true);
  const [reason, setReason] = useState("help");

  function handleNameChange(evt) {
    setName(evt.target.value);
    setHasError(evt.target.value.trim().length === 0);
  }

  function toggleError() {
    setHasError((prev) => !prev);
  }

  return (
    <section>
      <h3>Обратка</h3>

      <Button clickButton={toggleError}>Toggle Error</Button>

      <form>
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(evt) => setReason(evt.target.value)}
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggest</option>
        </select>

        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
      <hr />
      <StateVsRef />
    </section>
  );
}
