import React, { useState } from "react";

function AddCourses() {
  const initialFormData = {
    cslug: "",
    ctitle: "",
    cintro: "",
    AccessPeriodDays: "",
    caddon: "",
    cstatus: "",
    ccategory: "",
    csubcategory: "",
    ctype: "",
    cduration: "",
    cfess: "",
    cofferfees: "",
    ctrainer: "",
    cthumbnail: null,
    ccoverimage: null,
    cdemovideo: null,
    ckeywords: "",
    cmodules: "",
    cdescription: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  

  return (
    <div className="w-100 p-3 bg-main">
      <form
        // Form for Adding Course information
        className="forms-sample w-100 m-2 p-4 card"
        // onSubmit={handleSubmit}
      >
        {/* Form inputs for course details */}
        <div className="w-100 d-flex gap-3">
          {/* Form group for coursename*/}
          <div className="form-group w-100 row">
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Slug</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="cslug"
                placeholder="Course Slug"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Title</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="ctitle"
                placeholder="Course Title"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Intro</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="cintro"
                placeholder="Course Intro"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">
                Course Access Period Days
              </label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="AccessPeriodDays"
                placeholder="Course Access Period Days"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Addon</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="caddedon"
                placeholder="Course Addons"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Status</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="cstatus"
                placeholder="Course Status"
                onChange={handleChange}
              />
            </div>

            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Category</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="ccategory"
                placeholder="Course Category"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Subcategory</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="csubcategory"
                placeholder="Course Subcategory"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Type</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="ctype"
                placeholder="Course Type"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Duration</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="cduration"
                placeholder="Course Duration"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Fees</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="cfess"
                placeholder="Course Fees"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Offer Fees</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="cofferfees"
                placeholder="Course Offer Fees"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Trainer</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="ctrainer"
                placeholder="Course Trainer"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Thumbnail</label>
              <input
                type="file"
                className="form-control"
                // value={params.cname || ""}
                name="cthumbnail"
                placeholder="Course Duration"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Cover Image</label>
              <input
                type="file"
                className="form-control"
                // value={params.cname || ""}
                name="ccoverimage"
                placeholder="Course Cover Image"
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="exampleInputUsername1">Course Demo Video</label>
              <input
                type="file"
                className="form-control"
                // value={params.cname || ""}
                name="cdemovideo"
                placeholder="Course Demo Video"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="exampleInputUsername1">Course Keywords</label>
              <input
                type="text"
                className="form-control"
                // value={params.cname || ""}
                name="ckeywords"
                placeholder="Course keywords"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="exampleInputUsername1">Course Modules</label>
              <textarea
                name="csubcategory"
                id=""
                className="form-control"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12">
              <label htmlFor="exampleInputUsername1">Course Discription</label>
              <textarea
                name="cdescription"
                id=""
                className="form-control"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
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

export default AddCourses;
