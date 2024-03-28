const Accordion = (props) => {
  const { title, answer } = props;
  return (
    <div className="collapse collapse-arrow bg-white">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title lg:text-xl text-base font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
