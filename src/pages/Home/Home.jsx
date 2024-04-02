import React, { useEffect, useState } from "react";

const Home = () => {
  const [missions, setMissions] = useState([]);
  const [filteredMissions, setFilteredMissions] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMissions(data);
        setFilteredMissions(data);
      });
  }, []);



  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let missionSearch = filteredMissions.filter((data) => {
      //if (data?.name) {
        const title = data?.title?.toLowerCase();
        const createdBy = data?.createdBy?.toLowerCase();
        return title.startsWith(value) ||  createdBy.startsWith(value);
      //}
    });
    setMissions(missionSearch);
  }, [search]);



  return (
    <div className="w-full wrapper my-10">
      <h1 className="text-6xl font-semibold"> All Mission</h1>

      <div className="flex w-full items-center justify-center gap-4">
        <div className="form-control relative my-6 w-full">
          <input
            autoComplete="off"
            onChange={handleChange}
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
        {/*<button className="customButton w-44">Create New Mission</button>*/}

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
           className="customButton w-44"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Create New Mission
        </button>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
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
