
  import{BsFillMoonStarsFill} from 'react-icons/bs'
const Home = () => {
  return (
    <div className=' bg-white px-10' >
      <section className="w-full min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
    <h1>My Portfolio</h1>
    <ul>
      <li><BsFillMoonStarsFill/></li>
      <li><a href='#'>Resume</a></li>
    </ul>

    </nav>
      </section>
    </div>
  )
}

export default Home
