import React, { useState } from "react";
import {useUser} from "../../hooks/useUser";

const CreateMission = () => {
    const { user } = useUser();

  // State to hold form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    status: "",
    questions: [],
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect form data
    const form = e.target;
    const title = form.elements["title"].value;
    const description = form.elements["description"].value;
    const missionType = form.elements["type"].value;
    const status = form.elements["status"].value;
    const userId = form.elements["userId"].value;

    // Collect questions
    const questions = [];
    for (let i = 1; i <= 14; i++) {
      const questionValue = form.elements[`question${i}`].value;
      questions.push({ question: questionValue });
    }


    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, missionType, userId, questions }),
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
      })

    // Clear the form fields if needed
    form.reset();

  };

  return (
    <div className="w-full wrapper my-10">
      <h1 className="text-secondary text-center text-6xl font-semibold">
        Create Mission Form
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
              //onChange={handleCategory}
              id="type"
              className="select select-ghost min-w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
            >
              <option disabled>Mission Type</option>
              {["survey", "interview"].map((c) => (
                <option value={c} key={c} className="bg-primary text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control relative mb-6 w-full">
            <select
              //onChange={handleCategory}
              id="status"
              className="select select-ghost min-w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
            >
              <option disabled>Status</option>
              {["open", "close"].map((c) => (
                <option value={c} key={c} className="bg-primary text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>Questions:</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((question, i) => (
          <div className="flex items-center gap-5 w-full">
            <label className="w-10 text-center" htmlFor={`question${i + 1}`}>
              {i + 1}.
            </label>
            <textarea
              className="border border-primary w-full m-4 bg-transparent py-2 px-5"
              name={`question${i + 1}`}
              id={`question${i + 1}`}
              rows="1"
            ></textarea>
          </div>
        ))}

        <button className="customButton w-full">Submit form</button>
      </form>
    </div>
  );
};

export default CreateMission;
