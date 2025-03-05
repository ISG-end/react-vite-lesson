import "./Button.css";

export default function Button({ children, clickButton, isActive, ...props }) {
  return (
    <button
    {...props}
      className={isActive ? "button active" : "button"}
      onClick={clickButton}
    >
      {children}
    </button>
  );
}
