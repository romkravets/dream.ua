import Navbar from './Navbar'
import Footer from './Footer'
import {data} from '../../constants/data'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar data={data[0].navigation}/>
            <main>
                <div>{children}</div>
            </main>
            <Footer/>
        </div>
    )
  }
  
  export default Layout