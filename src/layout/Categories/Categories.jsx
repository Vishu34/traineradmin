import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import useUpdate from "../../hooks/useUpdate";
import { useFetchOnce } from "../../hooks/useFetchOnce";

function Categories() {
  //adding subcategories to the model on click of the view button
  const [FetchSubcat, subCatData, subCatLoading, subCatError] = useFetchOnce(
    `/api/categories/sub-cat?catg=`
  );
  const getSubcategories = async (e) => {
    e.preventDefault();
    // console.log(e.target.id);
    FetchSubcat(e.target.id);
  };

  //handle addition of category
  const handleAdd = () => {
    console.log("add");
  };

  // Handle deletion of a category
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
          .get("/api/categories/delete", { title: e.target.id })
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
  const [data, error, loading] = useFetch("/api/categories/list", true);

  return (
    <div className="w-100 p-3 bg-main relative">
      <section className="section">
        <div className="section-header">
          <h1>Category List</h1>
          <div className="section-header-breadcrumb"></div>
        </div>
      </section>

      {/* Categories Table */}
      <div className="row gap-5">
        <div className="card col-7">
          <div className="card-body ">
            <div className="table-responsive ">
              {/* Display loading message while data is being fetched */}
              {loading && <h1 className="text-black">Loading...</h1>}
              {/* Display error message if there's an error */}
              {error && <h1 className="text-black">{error.message}</h1>}
              {/* Display Category data if available */}
              {data.data && (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Image</th>
                      <th scope="col">Value</th>
                      <th scope="col">Status</th>
                      <th scope="col">Subcat</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {/* Map through trainers data and display in table rows */}
                    {data.data.map((item) => (
                      <tr key={item.title}>
                        <td>{item.title}</td>
                        <td>
                          <img src="" alt="image" />
                        </td>
                        <td>{item.value}</td>
                        <td>{item.cstatus}</td>
                        <td className="w-full">
                          {/* This button will show te subcatehory card */}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#Subcategories"
                            onClick={getSubcategories}
                            id={item.id}
                          >
                            <i id={item.id} className="bi bi-eye-fill"></i>
                          </button>
                        </td>
                        <td>
                          {/* Action links for each trainer */}
                          <Link
                            id={item.title}
                            className=" icon bg-danger icon"
                            onClick={handleDelete}
                          >
                            <i className="bi bi-trash3"></i>
                          </Link>{" "}
                          <Link
                            className="icon bg-warning"
                            to={`/categories/edit/:${item.title}`}
                          >
                            <i class="bi bi-pencil-square"></i>
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
          {data.data && (
            <div className="col-4 card">
              <label htmlFor="">Field</label>
              <input
                // onChange={handleChange}
                name="title"
                type="text"
                className="form-control my-2"
              />
              {/* {similar fields} */}
              <input
                className="btn btn-primary"
                onClick={handleAdd}
                type="submit"
                value="add"
              />
            </div>
          )}
      </div>
      {/* Card to show and add subcategories */}

      <div
        className="modal fade"
        id="Subcategories"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          {subCatLoading && "Loading..."}
          {subCatError && subCatError.message}
          {subCatData && (
            <div className="modal-content ">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{}</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-header">
                  {subCatData.data?.map((item) => (
                    <span
                      key={item.title}
                      className="badge text-bg-primary p-2 m-2"
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
                <div className="modal-footer w-100">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => console.log(e.target.value)}
                  name="newSubcategory"
                />
                <button className="btn btn-primary w-100">add</button>
                </div>
                {/* <button onClick={addSubcategory}>Add</button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
