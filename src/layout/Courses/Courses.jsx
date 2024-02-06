import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import swal from "sweetalert";
import { useDeleteOne } from "../../hooks/useDeleteOne";

function Courses() {

  const [data, error, loading] = useFetch("/api/courses/course-list", true);
  //setting student categories count
  const [totalCourses, setTotalCourses] = useState(0);
  const [activeCourses, setActiveCourses] = useState(0);
  const [inactiveCourses, setInactiveCourses] = useState(0);
  const [blockedCourses, setBlockedCourses] = useState(0);
  useEffect(() => {
    setTotalCourses(0);
    setBlockedCourses(0);
    setInactiveCourses(0);
    setActiveCourses(0);
    data.data?.map((item) => {
      setTotalCourses((prevTotal) => prevTotal + 1);
      if (item.status === "blocked") {
        setBlockedCourses((blockedCourses) => blockedCourses + 1);
      } else if (item.status === "1") {
        setActiveCourses(
          (activeCourses) => activeCourses + 1
        );
      } else if (item.status === "0") {
        setInactiveCourses((inactiveCourses) => inactiveCourses + 1);
      }
    });
  }, [data]);


  const { Delete } = useDeleteOne();

  const handleDelete = async (e) => {
    const shouldDelete = await swal({
      title: "Are you sure?",
      text: "you want to delete this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (shouldDelete) {
      await Delete(`/api/course/delete/${e.target.id}`);
      // Trigger a re-fetch or update state after deletion
    } else {
      swal("Your data is safe");
    }
  };

  return (
    <div className="w-100 p-3 bg-main">
      <section className="section d-flex justify-content-between align-items-center">
        <div className="section-header ">
          <h1>Course List</h1>
        </div>
        <div>
          <Link to="/courses/add" className="btn btn-primary me-2"><i className="bi bi-plus"></i> Add Cources</Link>
        </div>
      </section>
      <div className="row ">
        <Card title="Total Courses" value={totalCourses} bgColor="bg-1" />
        <Card title="Active Courses" value={activeCourses} bgColor="bg-2" />
        <Card title="Inactive Courses" value={inactiveCourses} bgColor="bg-3" />
        <Card title="Blocked Courses" value={blockedCourses} bgColor="bg-4" />
      </div>
      <div className="row ">
        {/* ... (similar structure for course-related cards) */}
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card ">
            <div className="card-body row">
              <div className="border-bottom mb-3 border-black">
                <h4 className="text-black">Filters</h4>
              </div>
              <div className="col-3 text-black position-relative">
                <label htmlFor="search">Search</label>
                <input
                  type="text"
                  className="form-control fs-6 ps-5"
                  id="search"
                  name="name"
                  // onChange={handleChange}
                  aria-describedby="emailHelp"
                  placeholder=""
                />
                <i className="bi bi-search text-black top-50 icon position-absolute"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-100">
        <div className="card-body ">
          {loading && <h1 className="text-black">Loading...</h1>}
          {error && <h1 className="text-black">{error.message}</h1>}
          {data && (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Type</th>
                    <th scope="col">Review</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Views</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {data.data?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.ctitle}</td>
                      <td>{item.ctype}</td>
                      <td> {item.creviews}</td>
                      <td>{item.cduration}</td>
                      <td>{item.cviews}</td>
                      <td>
                        <Link
                          className=" icon bg-danger icon"
                          onClick={handleDelete}
                        >
                          <i id={item.id} className="bi bi-x-lg"></i>
                        </Link>{" "}
                        <Link
                          className=" icon bg-primary"
                          to={`/courses/view/${item.id}`}
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Link>{" "}
                        <Link
                          className="icon bg-warning"
                          to={`/courses/edit/${item.id}`}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
