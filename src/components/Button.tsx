interface Props {
  text: string;
  handleClick: () => void;
}

const Button = (props: Props) => {
  return (
    <button onClick={props.handleClick} className="btn">
      {props.text}
    </button>
  );
};

export default Button;
