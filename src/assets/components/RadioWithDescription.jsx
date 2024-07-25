const RadioWithDescription = (props) => {
  const { item, key, activityObject, toSetActivityData } = props;
  return (
    <div className="flex my-2" key={key}>
      <div className="flex items-center h-12">
        <input
          onChange={(e) => {
            const copy = { ...activityObject };
            copy.activity = e.target.name;
            copy.activityFactor = item.activityFactor;
            toSetActivityData(copy);
          }}
          type="radio"
          name={item.activity}
          className={`radio ${item.color}`}
          checked={activityObject.activity === item.activity}
        />
      </div>
      <div className="ms-2 text-sm text-left">
        <label
          htmlFor="helper-radio"
          className="font-medium text-base text-neutral"
        >
          {item.activity}
        </label>
        <p id="helper-radio-text" className="text-sm font-normal text-neutral">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default RadioWithDescription;
