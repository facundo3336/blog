import "./Button.scss";

export const Button = ({ text, color, handleClick }) => {
  return (
    <button onClick={handleClick} className={color + ` button`}>
      {text}
    </button>
  );
};
