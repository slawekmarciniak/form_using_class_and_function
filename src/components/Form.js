const Form = (props) => {
  const { options, price, handlePrice, tip, handleTipChange, handleClick } =
    props;

  const handleFormSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={handleFormSubmit}>
      <p>price:</p>
      <input type="number" value={price} onChange={handlePrice} />
      <p>tips:</p>
      <select onChange={handleTipChange} value={tip} name="choice">
        {options}
      </select>
      <button className="formButton" type="submit" onClick={handleClick}>
        score
      </button>
    </form>
  );
};

export default Form;
