import NavBar from "../Navbar/NavBar"
import Wall from "../Wall/Wall"

const ContentScreen = () => {
  return (
    <div className="w-screen h-[100%] fixed top-25 ">
        <NavBar/>
        <Wall/>
    </div>
  )
}
export default ContentScreen