import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className='container'>
      <div className="card">
        <div className='card-header text-center'>
          <h3> Registration Page</h3>
        </div>
        <div className="card-body">
        <form>
          <div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label"> Inter Your Name</label>
              <input name="name" type="name" className="form-control" id="name" aria-describedby="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"> Inter Your Email</label>
              <input  name="email" type="password" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"> Inter Your Password</label>
              <input  name="password" type="password" className="form-control" id="password" />
            </div>
          </div>
        </form>
        </div>
        <div className='card-footer text-center'>
          <button className="btn btn-primary"> Submit Now</button>
        </div>
     </div>

    </div>
    </>
  )
}
