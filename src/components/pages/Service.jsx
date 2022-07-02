import React from 'react'
import Card from './assets/Card'
import Carddata from './assets/Carddata'
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Best Shoes in Birtamode</h1>
        <h2 className="text-center fs-1 text-black"><code>ALL In One</code></h2>
      </div>
      <div className="continer-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-2">
            {
              Carddata.map((val, ind)=>{
                return<Card key={ind}
                  image={val.image}
                  name={val.name}
                  description={val.description}
                />
              })
            }
         
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service