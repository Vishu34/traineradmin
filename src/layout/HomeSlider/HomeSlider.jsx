import React, {useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function HomeSlider() {
  // State to store filter parameters
  const [params, setParams] = useState({
    htitle: "",
    himage: "",
    hstatus: "",
  });

  // Handle changes in filter inputs
  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
    // console.log(params);
  };

  // Handle deletion of a slider item
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
          .get("/api/homeslider/delete", { title: e.target.id })
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

  // Fetch category data using a custom hook (useFetch)
  const [data, error, loading] = useFetch("/api/homeslider", params);

  return (
    <div className="w-100 p-3 bg-main relative">
      <section className="section">
        <div className="section-header">
          <h1>Home Sliders List</h1>
          <div className="section-header-breadcrumb">
            <button className="btn btn-primary">Add Home Slider</button>
          </div>
        </div>
      </section>

      {/* Categories Table */}
      <div className="card w-100">
        <div className="card-body ">
          <div className="table-responsive">
            {/* Display loading message while data is being fetched */}
            {loading && <h1 className="text-black">Loading...</h1>}
            {/* Display error message if there's an error */}
            {error && <h1 className="text-black">{error.message}</h1>}
            {/* Display Category data if available */}
            {data && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {/* Map through trainers data and display in table rows */}
                  {data.map((item) => (
                    <tr key={item.htitle}>
                      <td>{item.htitle}</td>
                      <td>{item.himage}</td>
                      <td>{item.hstatus}</td>
                      <td>
                        {/* Action links for each trainer */}
                        <Link
                          id={item.htitle}
                          className=" icon bg-danger icon"
                          onClick={handleDelete}
                        >
                          <i className="bi bi-person-fill-x"></i> Delete
                        </Link>{" "}
                        <Link
                          className=" icon bg-primary"
                          to={`/home-slider/view/:${item.htitle}`}
                        >
                          <i className="bi bi-person-fill-exclamation"></i> View
                        </Link>{" "}
                        <Link
                          className="icon bg-warning"
                          to={`/home-slider/edit/:${item.htitle}`}
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

export default HomeSlider;
