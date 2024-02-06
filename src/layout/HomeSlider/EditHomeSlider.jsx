import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useFetch } from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";

function EditHomeSlider() {
  // Extracts slider title from URL parameters
  const { title } = useParams();

  // Fetch slider data using a custom hook (useFetch)
  const [data, error, loading] = useFetch(`/api/homeslider/details/${title}`, title);

  // State to store form parameters
  const [params, setParams] = useState({});

  // Updates params when data is fetched
  useEffect(() => {
    if (data) {
      setParams(data);
    }
  }, [data]);

  // Handles changes in form inputs
  const handleChange = (e) => {
    // Dynamically updates the corresponding form parameter
    setParams((prevParams) => ({
      ...prevParams,
      [e.target.name]: e.target.value,
    }));
  };

  // Uses a custom hook (useUpdate) for handling the update API call
  const { handleUpdate } = useUpdate(`/api/homeslider/update/${title}`);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calls the handleUpdate function from the custom hook
    handleUpdate(params).then(() => {
      // Displays a success message using SweetAlert library
      swal("Good job!", "Slider Updated Successfully", "success");
    });
  };

  return (
    <>
      {/* Display error message if there's an error */}
      {error && error.message}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data && (
        <div className="w-100 p-3 bg-main">
          <form
            // Form for updating slider information
            className="forms-sample w-100 m-2 p-4 card"
            onSubmit={handleSubmit}
          >
            {/* Form inputs for slider details */}
            <div className="w-100 d-flex gap-3">
              {/* Form group for title */}
              <div className="form-group w-100">
                <label htmlFor="exampleInputUsername1">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={params.htitle || ""}
                  name="htitle"
                  id="exampleInputUsername1"
                  placeholder="Title"
                  onChange={handleChange}
                />
              </div>
              {/* ... (similar form groups for other details) ... */}
            </div>

            {/* Submit and cancel buttons */}
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button type="reset" className="btn btn-light">
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditHomeSlider;
