import plusmeLogo from "../../../public/plusme.svg";
import bellImg from "../../../public/icons/Bell.svg";
const Header = () => {
  return (
    <div className="w-screen h-12 fixed flex justify-around items-center px-4 bg-[var(--clr-surface-a10)]">
        <img src={plusmeLogo.src} alt="plusme logo" className="" />
        <div className="w-1/4"></div>
        <div><img src={bellImg.src} alt="" /></div>
    </div>
  )
}
export default Header