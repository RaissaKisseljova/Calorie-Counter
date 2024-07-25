const CalorieCard = (props) => {
  const { src, text, result, alt } = props;
  return (
    <div className="carousel-item relative">
      <img src={src} alt={alt} />
      <div className="absolute w-full h-full text-center">
        <h1 className="font-bold text-lg mt-5">{text}</h1>
        <h1 className="mt-10 text-4xl font-semibold">{result} Calories</h1>
      </div>
    </div>
  );
};

export default CalorieCard;
