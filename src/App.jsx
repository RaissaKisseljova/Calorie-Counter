import "./App.css";

import CalorieCard from "./assets/components/CalorieCard";
import Input from "./assets/components/Input";
import RadioWithDescription from "./assets/components/RadioWithDescription";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState({
    activity: "",
    activityFactor: 0,
  });
  const [personData, setPersonData] = useState({
    age: "",
    height: "",
    weight: "",
  });

  const [result, setResult] = useState({
    toKeep: 0,
    toLose: 0,
    toGain: 0,
  });

  const physicalActivityArray = [
    {
      activity: "Minimal",
      activityFactor: 1.2,
      description: "Sedentary work and no physical activity",
      color: "checked:bg-green-300",
    },
    {
      activity: "Low",
      activityFactor: 1.375,
      description: "Rare, irregular workouts, activity in everyday life",
      color: "checked:bg-green-500",
    },
    {
      activity: "Medium",
      activityFactor: 1.55,
      description: "Training 3-5 times a week",
      color: "checked:bg-orange-300",
    },
    {
      activity: "High",
      activityFactor: 1.725,
      description: "Training 6-7 times a week",
      color: "checked:bg-orange-500",
    },
    {
      activity: "Very high",
      activityFactor: 1.9,
      description: "More than 6 workouts per week and physical work",
      color: "checked:bg-red-500",
    },
  ];

  const toCalculate = () => {
    let calculated =
      10 * personData.weight + 6.25 * personData.height - 5 * personData.age;
    calculated = gender === "male" ? calculated + 5 : calculated - 161;
    const caloriesToSupportWeight = calculated * activity.activityFactor;
    const toLoseWeight = caloriesToSupportWeight * 0.85;
    const toGainWeight = caloriesToSupportWeight * 1.15;
    const result = {
      toKeep: Math.round(caloriesToSupportWeight),
      toLose: Math.round(toLoseWeight),
      toGain: Math.round(toGainWeight),
    };
    setResult(result);
  };

  const toSetPersonData = (fieldName, value) => {
    const copy = { ...personData };
    copy[fieldName] = parseInt(value);
    setPersonData(copy);
  };
  return (
    <>
      <html data-theme="bumblebee">
        <form
          className="bg-fruits bg-cover bg-bottom flex flex-col items-center justify-center w-screen max-w-screen min-h-screen max-h-full  py-20 overflow-y-scroll no-scrollbar"
          onSubmit={(e) => {
            e.preventDefault();
            toCalculate();
          }}
        >
          <div className="container px-4 w-full h-max flex flex-col items-center ">
            <div className="w-5/12">
              <h2 className="mb-5 pt-5 text-left text-4xl font-semibold text-neutral">
                Gender
              </h2>
              <div className="join flex">
                <input
                  onClick={() => setGender("male")}
                  className={`join-item btn btn-lg btn-wide text-neutral  border-primary hover:bg-secondary ${
                    gender === "male" && "btn-accent"
                  }`}
                  type="radio"
                  name="options"
                  aria-label="Male"
                  defaultChecked
                />
                <input
                  onClick={() => setGender("female")}
                  className={`join-item btn btn-lg btn-wide text-neutral border-primary hover:bg-secondary ${
                    gender === "female" && "btn-accent"
                  }`}
                  type="radio"
                  name="options"
                  aria-label="Female"
                />
              </div>
            </div>
            <div className="mt-10 gap-5 flex w-5/12 max-w-6/12">
              <Input
                fieldName="Age"
                fieldToSet="age"
                value={personData.age}
                toSetPersonData={toSetPersonData}
              />
              <Input
                fieldName="Height"
                fieldToSet="height"
                value={personData.height}
                toSetPersonData={toSetPersonData}
              />
              <Input
                fieldName="Weight"
                fieldToSet="weight"
                value={personData.weight}
                toSetPersonData={toSetPersonData}
              />
            </div>
            <div className="mt-10 flex flex-col  w-5/12">
              <h2 className="text-left text-4xl mb-5 font-semibold text-neutral">
                Physical Activity
              </h2>

              {physicalActivityArray.map((i, index) => {
                return (
                  <RadioWithDescription
                    key={index}
                    item={i}
                    activityObject={activity}
                    toSetActivityData={setActivity}
                  />
                );
              })}
            </div>

            <div className="flex mt-5 pb-5 gap-4 w-6/12 justify-around">
              <button
                disabled={
                  !personData.age ||
                  !personData.height ||
                  !personData.weight ||
                  !activity.activity
                }
                type="submit"
                className="btn btn-primary btn-wide text-lg hover:bg-primary disabled:btn-accent"
                onClick={() => console.log(personData.age, "activity selected")}
              >
                Calculate
              </button>

              <button
                className="btn btn-ghost hover:bg-transparent"
                onClick={() => {
                  setActivity({});
                  setPersonData({
                    age: "",
                    height: "",
                    weight: "",
                  });
                }}
              >
                <RxCross1 size="18px" />
                Start Again
              </button>
            </div>

            {result.toKeep ? (
              <div className="carousel rounded-box mt-10 flex items-center justify-center ">
                <CalorieCard
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                  text="If you want to keep your weight"
                  result={result.toKeep}
                  alt="picture of strawberry"
                />
                <CalorieCard
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                  text="If you want to lose weight"
                  result={result.toLose}
                  alt="picture of cherries"
                />{" "}
                <CalorieCard
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                  text="If you want to gain weight"
                  result={result.toGain}
                  alt="picture of lemon"
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </form>
      </html>
    </>
  );
}

export default App;
