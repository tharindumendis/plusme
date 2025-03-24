import home from "../../../public/icons/home.svg";
import search from "../../../public/icons/search.svg";
import friends from "../../../public/icons/friends.svg";
import add from "../../../public/icons/add.svg";
import menu from "../../../public/icons/menu.svg";

const NavBar = () => {
  return (
    <div className="w-screen h-13 fixed top-12 flex justify-around items-center px-4 bg-[var(--clr-surface-a10)]">
       <div><img src={home.src} alt="" /></div>
       <div><img src={friends.src} alt="" /></div>
       <div><img src={add.src} alt="" width={"40px"}/></div>
       <div><img src={search.src} alt="" /></div>
       <div><img src={menu.src} alt="" /></div>
    </div>
  )
}
export default NavBar