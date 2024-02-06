import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useFetch } from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";

function EditStudentInfo() {
  // Extracts student ID from URL parameters
  const { id } = useParams();

  // Fetch student data using a custom hook (useFetch)
  const [data, error, loading] = useFetch(`/api/student/${id}`, id);
  console.log(data);

  // State to store form parameters
  const [params, setParams] = useState({});

  // Updates params when data is fetched
  useEffect(() => {
    if (data) {
      setParams(data.data);
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
  const { handleUpdate } = useUpdate(`/api/student/update/${id}`);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calls the handleUpdate function from the custom hook
    handleUpdate(params).then(() => {
      // Displays a success message using SweetAlert library
      swal("Good job!", "Student Updated Successfully", "success");
    });
  };

  return (
    <>
      {/* Display error message if there's an error */}
      {error && error.message}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data.data && (
        <div className="w-100 p-3 bg-main">
        <form className="forms-sample w-100 m-2 p-4 card" onSubmit={handleSubmit}>
          <div className="w-100 d-flex gap-3">
            <div className="form-group w-100 row">
              <div className="col-4">
                <label htmlFor="exampleInputUsername1">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="sname"
                  value={params.sname}
                  placeholder="Student Name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="semail"
                  value={params.semail}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputMobile">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="spassword"
                  value={params.spassword}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputMobile">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="smobile"
                  value={params.smobile}
                  placeholder="Mobile"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputMobile">Whatsapp</label>
                <input
                  type="text"
                  className="form-control"
                  name="swhatsapp"
                  value={params.swhatsapp}
                  placeholder="Whatsapp"
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="sdob"
                  value={params.sdob}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Status</label>
                <input
                  type="text"
                  className="form-control"
                  name="status"
                  value={params.status}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="scity"
                  value={params.scity}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="saddress"
                  value={params.saddress}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="scountry"
                  value={params.scountry}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  name="sslug"
                  value={params.sslug}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Verified</label>
                <input
                  type="text"
                  className="form-control"
                  name="varified"
                  value={params.varified}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Profile Pic</label>
                <input
                  type="file"
                  className="form-control"
                  name="sprofilepicUrl"
                  value={params.sprofilepicUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Background Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="sbackgroundUrl"
                  value={params.sbackgroundUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="spincode"
                  value={params.spincode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Level of Education</label>
                <input
                  type="text"
                  className="form-control"
                  name="levelOfeducation"
                  value={params.levelOfeducation}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="exampleInputDOB">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="sgender"
                  value={params.sgender}
                  onChange={handleChange}
                />
              </div>
              {/* Add other input fields similarly */}
            </div>
          </div>
  
          {/* Submit and cancel buttons */}
          <button type="submit" onClick={handleSubmit} className="btn my-2 btn-primary ">
            Submit
          </button>
          <button type="reset" className="btn my-2 btn-light">
            Cancel
          </button>
        </form>
      </div>
      )}
    </>
  );
}

export default EditStudentInfo;
