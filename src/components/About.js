import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
        <div className="card  text-center">
          <h2 className="text-danger">About Us</h2>
        </div>
       <Link to='/'><button className="btn btn-primary"> Go Back </button></Link>
    </div>
  )
}

export default About
