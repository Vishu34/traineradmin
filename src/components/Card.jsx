import React from 'react'

function Card({title , value , bgColor}) {
  return (
      <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className={`card ${bgColor}`}>
            <div className="card-wrap">
              <div className="card-header text-center">
                <p>
                  <strong>{title}</strong>
                </p>
              </div>
              <div className="card-body d-flex justify-between align-center">
                <h1> {value} </h1>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card
