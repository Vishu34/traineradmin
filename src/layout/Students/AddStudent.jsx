import React,{useState} from "react";

function AddStudent() {
  const initialFormData = {
    sname: "",
    semail: "",
    smobile: "",
    sdob: "",
    scity: "",
    swhatsapp: "",
    status: "",
    saddress: "",
    sslug: "",
    spassword: "",
    levelOfeducation: "",
    passOutYear: "",
    sbackgroundUrl: "",
    scountry: "",
    sprofilepicUrl: "",
    sstate: "",
    varified: "",
    sgender: "",
    spincode: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
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
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Status</label>
              <input
                type="text"
                className="form-control"
                name="status"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">City</label>
              <input
                type="text"
                className="form-control"
                name="scity"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Address</label>
              <input
                type="text"
                className="form-control"
                name="saddress"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Country</label>
              <input
                type="text"
                className="form-control"
                name="scountry"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Slug</label>
              <input
                type="text"
                className="form-control"
                name="sslug"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Verified</label>
              <input
                type="text"
                className="form-control"
                name="varified"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Profile Pic</label>
              <input
                type="file"
                className="form-control"
                name="sprofilepicUrl"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Background Image</label>
              <input
                type="file"
                className="form-control"
                name="sbackgroundUrl"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Pin Code</label>
              <input
                type="text"
                className="form-control"
                name="spincode"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Level of Education</label>
              <input
                type="text"
                className="form-control"
                name="levelOfeducation"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputDOB">Gender</label>
              <input
                type="text"
                className="form-control"
                name="sgender"
                onChange={handleChange}
              />
            </div>
            {/* Add other input fields similarly */}
          </div>
        </div>

        {/* Submit and cancel buttons */}
        <button type="submit" className="btn my-2 btn-primary ">
          Submit
        </button>
        <button type="reset" className="btn my-2 btn-light">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
