import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function Trainers() {
  // State to store filter parameters
  const [params, setParams] = useState({
    name: "",
    startDate: "",
    endDate: "",
    filter: "",
  });
   // Fetch trainers data using a custom hook (useFetch)
   const [data, error, loading] = useFetch(
    "/api/trainers/all-trainers",
    params
  )

  //setting trainers categories count
  const [totalTrainers, setTotalTrainers] = useState(0);
  const [organizationTrainers, setOrganisationTrainers] = useState(0);
  const [inactiveTrainers, setInactiveTrainers] = useState(0);
  const [blockedTrainers, setBlockedTrainers] = useState(0);
  useEffect(() => {
    setTotalTrainers(0);
    setBlockedTrainers(0);
    setInactiveTrainers(0);
    setOrganisationTrainers(0);
    data.data?.map((item) => {
      setTotalTrainers((prevTotal) => prevTotal + 1);
      if (item.status === "blocked") {
        setBlockedTrainers((blockedTrainers) => blockedTrainers + 1);
      } else if (item.status === "1") {
        setOrganisationTrainers(
          (organisationTrainers) => organisationTrainers + 1
        );
      } else if (item.status === "0") {
        setInactiveTrainers((inactiveTrainers) => inactiveTrainers + 1);
      }
    });
  }, [data, params]);

  // Handle changes in filter inputs
  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
    // console.log(params);
  };

  // Handle deletion of a trainer
  const handleDelete = async (e) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .get("http://localhost:8085/api/trainers/delete", { id: e.target.id })
          .then(
            swal("Poof! Selected data has been deleted!", {
              icon: "success",
            })
          )
          .catch((e) => swal(e.message));
      } else {
        swal("Your data is safe");
      }
    });
  };

 

  return (
    <div className="w-100 p-3 bg-main">
      <section className="section">
        <div className="section-header d-flex justify-content-between align-items-center ">
          <h1>Trainers List</h1>
          <div className="">
            <Link to="/trainers/add"  className="btn btn-primary">Add Trainer</Link>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <div className="row">
        <Card title="Total Trainers" value={totalTrainers} bgColor="bg-1" />
        <Card title="Organization Trainers" value={organizationTrainers} bgColor="bg-2" />
        <Card title="Inactive Trainers" value={inactiveTrainers} bgColor="bg-3" />
        <Card title="Blocked Trainers" value={blockedTrainers} bgColor="bg-4" />
      </div>

      {/* Filter Section */}
      <div className="row">
        <div className="col-12">
          <div className="card ">
            <div className="card-body row">
              <h4 className="text-black">Filters</h4>
              {/* Input fields for filtering */}
              <div className="col-3">
                <label htmlFor="search">Search</label>
                <input
                  type="text"
                  className="form-control "
                  id="search"
                  name="name"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              {/* ... (similar input fields for other filters) ... */}
            </div>
          </div>
        </div>
      </div>

      {/* Trainers Table */}
      <div className="card w-100">
        <div className="card-body ">
          <div className="table-responsive">
            {/* Display loading message while data is being fetched */}
            {loading && <h1 className="text-black">Loading...</h1>}
            {/* Display error message if there's an error */}
            {error && <h1 className="text-black">{error.message}</h1>}
            {/* Display trainers data if available */}
            {data.data && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">City</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {/* Map through trainers data and display in table rows */}
                  {data.data?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.tname}</td>
                      <td>{item.tnumber}</td>
                      <td>{item.temail}</td>
                      <td>{item.tgender}</td>
                      <td>{item.tcity}</td>
                      <td>
                        {/* Action links for each trainer */}
                        <Link
                          id={item.id}
                          className=" icon bg-danger icon"
                          onClick={handleDelete}
                        >
                          <i className="bi bi-person-fill-x"></i> Delete
                        </Link>{" "}
                        <Link
                          className=" icon bg-primary"
                          to={`/trainers/view/:${item.id}`}
                        >
                          <i className="bi bi-person-fill-exclamation"></i> View
                        </Link>{" "}
                        <Link
                          className="icon bg-warning"
                          to={`/trainers/edit/:${item.id}`}
                        >
                          <i className="bi bi-person-fill-gear "></i> Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
