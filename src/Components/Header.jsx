import Logo from "./../Assets/Logo_AquaMonitor.png"
import "./../Styles/header.css"

export default function Header() {
    return(
        <div class="main">
            <img src={Logo} alt="Logo AquaMonitor"/>
        </div>
    )
}