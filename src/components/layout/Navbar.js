import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
      <div>
        {props.data.map((link, index) => {
          return (
           <Link to={link.url}>{link.title}</Link>
          )
        }) }
      </div>
    )
  }
  
  export default Navbar