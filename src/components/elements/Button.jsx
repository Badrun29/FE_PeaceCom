const Button = (props) => {
  const { children, className, onClick, type = "button" } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-block text-sm text-white font-bold rounded-full bg-blue-700 hover:bg-blue-800 border-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
