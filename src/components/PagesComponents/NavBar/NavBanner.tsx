import style from "./NavBar.module.css"
import NavSlider from "./NavSlider"
const NavBanner = () => {
  return (
    <div
      className={`${style.backgroundImageStyle} h-9 flex items-center justify-center w-full `}>
      <NavSlider />
    </div>
  )
}

export default NavBanner