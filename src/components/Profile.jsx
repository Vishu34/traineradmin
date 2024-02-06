import React from "react";

function Profile({ data }) {
  return (
    <div className="bg-main p-3 w-100 d-flex text-black gap-5">
      <div className="card p-3 w-50   ">
        <div className="border-bottom border-black text-center">
          <div className="position-relative">
            <img
              className="border border-4 rounded-circle ratio-1x1"
              src="https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
            <div
              className={`flag  ${
                data.status == "active" ? "bg-success" : "bg-danger"
              }`}
            ></div>
          </div>
          <div className="text-black">
            <h2>{data.sname}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              molestiae.
            </p>
          </div>
        </div>

        <div className="px-3 text-black">
          <div>
            <i className="bi bi-telephone-fill"></i> {data.smobile}
          </div>
          <div>
            <i class="bi bi-whatsapp"></i> {data.swhatsapp}
          </div>
          <div className="">
            <i className="bi bi-geo-alt-fill"></i> {data.scity}
          </div>
          <div className="">
            <i class="bi bi-building-exclamation"></i> {data.saddress}
          </div>
          <div className="">
            <i class="bi bi-envelope"></i> {data.semail}
          </div>
          <div className="">
            <i class="bi bi-broadcast-pin"></i> {data.sslug}
          </div>
          <div className="">
            <i class="bi bi-card-list"></i> {data.createdAt}
          </div>
          <div className="">
            <i class="bi bi-pencil-square"></i> {data.updatedAt}
          </div>
        </div>
      </div>
      <div className="card w-50 p-3 text-black">
        <div className="text-black text-center ">
          <h2>Past Reviews</h2>
          <div className="accordion" id="reviews">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#first-review"
                  aria-expanded="false"
                  aria-controls="first-review"
                >
                  First Review
                </button>
              </h2>
              <div
                id="first-review"
                className="accordion-collapse collapse"
                data-bs-parent="#review"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis nesciunt modi fuga accusamus quaerat quam harum
                  atque eius vitae odio numquam ipsa reiciendis id tempore,
                  doloribus, est a excepturi eum! Veritatis ratione, tempora
                  mollitia reiciendis animi magnam, eius porro ex velit
                  accusantium aliquam quod corrupti commodi rem eum. Eos,
                  numquam?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
