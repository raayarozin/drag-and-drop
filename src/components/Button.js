import './Button.css';
const Button = (props) => {
  return (
    <button
      className={`todo-item-btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.btnValue}
    </button>
  );
};
export default Button;
