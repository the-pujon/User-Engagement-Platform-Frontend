import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import {useUser} from "../../hooks/useUser";
//import { useUser } from "../../hooks/useUser";

const Home = () => {
  const [missions, setMissions] = useState([]);
  const [filteredMissions, setFilteredMissions] = useState([]);
  const [search, setSearch] = useState("");
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMissions(data);
        setFilteredMissions(data);
        setRefresh(false);
      });
  }, [refresh]);

  //for deleting mission
  const handleDelete = (id) => {
    console.log(id);

    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_BASE_URL}/api/mission/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRefresh(true);
      });
  };

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let missionSearch = filteredMissions.filter((data) => {
      const title = data?.title?.toLowerCase();
      const createdBy = data?.createdBy?.toLowerCase();
      return title.startsWith(value) || createdBy.startsWith(value);
    });
    setMissions(missionSearch);
  }, [search]);

  const handleLogout = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("token")
  }

  return (
    <div className="w-full wrapper my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-semibold"> All Mission</h1>
        {user ? (
          <button className="customButton px-4" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={"/auth/login"} className="customButton px-4 ">
            Login
          </Link>
        )}
      </div>

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
          <div className="modal-box bg-white !rounded-none">
            <div className="flex flex-col">
              <label
                htmlFor="totalQuestions"
                className="text-xl text-secondary"
              >
                <b>Total Question</b>{" "}
                <i>
                  (Please let us know how many questions do you want to add in
                  your mission)
                </i>
              </label>
              <input
                type="number"
                className="text-2xl py-2 px-3 bg-transparent border-b border-primary outline-none"
                id="totalQuestions"
                name="totalQuestions"
                required
                onChange={(e) => setTotalQuestions(e.target.value)}
              />

              <Link
                to="/createMission"
                state={{ totalQuestions }}
                className="customButton my-2 w-full text-center"
              >
                Proceed
              </Link>

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
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
                  <div className="flex gap-3">
                    {user && (
                      <>
                        {" "}
                        <Link
                          className="text-2xl cursor-pointer"
                          to={`/editMission/${mission._id}`}
                        >
                          <FaEdit />
                        </Link>
                        <button
                          className="text-2xl cursor-pointer"
                          onClick={() => handleDelete(mission._id)}
                        >
                          <FaRegTrashAlt />
                        </button>
                      </>
                    )}
                    <Link
                      to={`participateMission/${mission._id}`}
                      className="py-1 px-2 border border-primary"
                    >
                      Participate
                    </Link>
                  </div>
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
