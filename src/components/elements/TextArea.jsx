const TextArea = (props) => {
  const { className, placeholder, onChange } = props;
  return (
    <textarea
      className={`textarea rounded-xl bg-slate-50 border w-full h-[100px] border-slate-400  focus:outline-blue-300 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
