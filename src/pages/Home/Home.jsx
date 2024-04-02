import React, { useEffect, useState } from "react";

const Home = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMissions(data);
      });
  }, []);

  return (
    <div className="w-full wrapper">
      <h1 className="text-6xl font-semibold"> All Mission</h1>

      <div>
        <div className="form-control relative my-6">
          <input
            autoComplete="off"
            id="search"
            name="search"
            type="text"
            className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
            placeholder="search"
            required
          />
          <label
            htmlFor="search"
            className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
          >
            Search
          </label>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table table-lg table-pin-rows table-pin-cols">
          <thead className="border-b border-black">
            <th>Title</th>
            <th>Description</th>
            <th>Type</th>
            <th>Created By</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>

          <tbody>
            {missions.map((mission) => (
              <tr>
                <td>{mission.title}</td>
                <td>{mission.description}</td>
                <td>{mission.missionType}</td>
                <td>{mission.createdBy}</td>
                <td>{mission.status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>Participate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
