import '../App.css'
import Logo from '../assets/chef.png'

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo" />
            <p>Minimal Chef AI</p>
        </header>
    )
}