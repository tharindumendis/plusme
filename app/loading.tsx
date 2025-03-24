import plusmeLogo from "../public/plusme.svg";
const Loading = () => {
  return (
    <>
    <div className="flex justify-around flex-col items-center h-screen w-screen">

      <div className=" flex justify-center items-center w-16 h-16 border-2 border-[var(--clr-primary-a0)] rounded-full relative">
        <span className="w-6 h-[2px] bg-[var(--clr-primary-a20)] absolute loadingLineH "></span>
        <span className="w-6 h-[2px] bg-[var(--clr-primary-a20)] absolute loadingLineV "></span>
        <div className="w-2 h-[70px] spin rounded-full">
          <div className="w-2 h-2 backdrop-blur-2xl bg-[var(--clr-primary-a10)] rounded-full"></div>
        </div>
      </div>
      <div>
        <div>
          <img src={plusmeLogo.src} alt="" />
        </div>
      </div>
    </div>
  </>
  )
}
export default Loading