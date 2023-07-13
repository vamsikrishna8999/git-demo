import React from 'react'

function Signup() {
  return (
    <div className='text-center'>
      <p className="lead display-2">Signup</p>
      <div className="container">
        <form className="bg-black bg-opacity-50 text-light col-8 mx-auto p-3 mb-4 rounded">
          <div className="col-8 mx-auto mb-3">
            <label htmlFor=""className='mb-2' >Firstname</label>
            <input type="text" className='form-control' />
          </div>
          <div className="col-8 mx-auto mb-3">
            <label htmlFor=""className='mb-2' >Lastname</label>
            <input type="text" className='form-control' />
          </div>
          
          <div className="col-8 mx-auto mb-3">
            <label htmlFor=""className='mb-2' >Email</label>
            <input type="text" className='form-control' />
          </div>
          <div className="col-8 mx-auto mb-3">
            <label htmlFor=""className='mb-2' >Phone</label>
            <input type="number" className='form-control' />
          </div>
          <div className="col-8 mx-auto mb-3">
            <label htmlFor=""className='mb-2' >Username</label>
            <input type="text" className='form-control' />
          </div>
          <div className="col-8 mx-auto mb-2">
            <label htmlFor="" className='mb-2'>Password</label>
            <input type="password" className='form-control' />
          </div>
          <div className="text-center">
            <button className="btn btn-success text-center mt-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup