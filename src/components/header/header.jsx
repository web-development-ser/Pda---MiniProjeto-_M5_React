import './header.css';
import img_api from '../../assets/ANM_Logo.jpeg';
const Header = () => {
    return (
        <header className="container_header">

            <div>
                <img src={img_api} alt="logo_ANM" />
                <h2>ANM & SERVER LOCAL</h2>
            </div>

            <nav>
                <ul>
                    <li>
                        <a target='b_blank' href="https://github.com/web-development-ser">Git Hub</a>
                    </li>
                    <li>
                        <a target='b_blank' href="https://www.linkedin.com/in/sergio-santos-1a7659222/">Linkedin</a>
                    </li>
                    <li>
                        <a target='b_blank' href="https://www.instagram.com/his.sergio.his">Instagram</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { Header };