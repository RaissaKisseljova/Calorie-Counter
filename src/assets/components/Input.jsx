const Input = (props) => {
  const { fieldName, value, toSetPersonData, fieldToSet } = props;
  const placeholders = {
    age: 28,
    height: 160,
    weight: 60,
  };
  return (
    <label className=" w-fit input input-bordered input-primary font-semibold text-neutral flex items-center gap-2">
      {fieldName}
      <input
        type="number"
        className="w-12 text-neutral"
        placeholder={placeholders[fieldToSet]}
        value={value}
        onChange={(e) => toSetPersonData(fieldToSet, e.target.value)}
      />
    </label>
  );
};

export default Input;
