
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 border-b'>
        <h1 className='font-bold text-lg'>CourseHub</h1>
        <div className='flex  gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </nav>
  )
}

export default Navbar