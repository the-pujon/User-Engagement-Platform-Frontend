import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const { user } = useUser();
  const id = useParams().id;
  const [mission, setMission] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission/${id}`,{
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMission(data);
      });
  }, []);


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data
    const form = e.target;
    const title = form.elements["title"].value;
    const description = form.elements["description"].value;
    const missionType = form.elements["type"].value;
    const status = form.elements["status"].value;

    const questions = [];
    mission?.questions?.map((q, i) => {
      //console.log(q)
      const questionValue = form.elements[`question${i + 1}`].value;
      questions.push({ question: questionValue });
    });

    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission/${id}`, {
      mode: "no-cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        missionType,
        userId: user,
        questions,
        status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //// Clear the form fields if needed
    form.reset();
  };

  return (
    <div className="w-full wrapper my-10">
      <h1 className="text-secondary text-center text-4xl md:text-5xl lg:text-6xl font-semibold pb-4">
        Edit Mission
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="form-control relative my-6">
          <input
            autoComplete="off"
            id="userId"
            name="userId"
            type="text"
            className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
            placeholder="userId"
            disabled
            value={user}
          />
          <label
            htmlFor="userId"
            className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
          >
            UserId
          </label>
        </div>

        <div className="form-control relative my-6">
          <input
            autoComplete="off"
            id="title"
            name="title"
            type="text"
            className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
            placeholder="title"
            required
            defaultValue={mission.title}
          />
          <label
            htmlFor="title"
            className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
          >
            Title
          </label>
        </div>

        <div className="form-control relative my-6">
          <input
            autoComplete="off"
            id="description"
            name="description"
            type="text"
            className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
            placeholder="description"
            required
            defaultValue={mission.description}
          />
          <label
            htmlFor="description"
            className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
          >
            Description
          </label>
        </div>

        <div className="flex w-full gap-4">
          <div className="form-control relative mb-6 w-full">
            <select
              //  defaultChecked={mission.missionType}

              //onChange={handleCategory}
              id="type"
              className="select select-ghost min-w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
            >
              <option disabled>Mission Type</option>
              {["survey", "interview"].map((c) => (
                <option
                  //  defaultChecked={mission.missionType}
                  selected={c === mission.missionType}
                  value={c}
                  key={c}
                  className="bg-primary text-white"
                >
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control relative mb-6 w-full">
            <select
              id="status"
              className="select select-ghost min-w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
            >
              <option disabled>Status</option>
              {["open", "closed"].map((c) => (
                <option
                  selected={c === mission.status}
                  value={c}
                  key={c}
                  className="bg-primary text-white"
                >
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>Questions:</div>
        {mission?.questions?.map((question, i) => (
          <div className="flex items-center gap-5 w-full">
            <label className="w-10 text-center" htmlFor={`question${i + 1}`}>
              {i + 1}.
            </label>
            <textarea
              className="border border-primary w-full m-4 bg-transparent py-2 px-5 outline-none"
              name={`question${i + 1}`}
              id={`question${i + 1}`}
              rows="1"
              defaultValue={question.question}
            ></textarea>
          </div>
        ))}

        <button className="customButton w-full">Update form</button>
      </form>
    </div>
  );
};

export default EditForm;
