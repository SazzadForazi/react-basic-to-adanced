const Button = ({ clickHandler }) => {
  console.log("Button rendered");
  return <button onClick={clickHandler}>Increase by 1</button>;
};

export default Button;
