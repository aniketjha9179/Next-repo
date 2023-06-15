import Link from "next/link";
import './login.css'



export default function Layout({ children }) {
  return <div>
    <ul className="login-menu">
        <li>
            <h4>
                login navbar
            </h4>
        </li>
        <li>
            <Link href='/login'  >login main</Link>
        </li>
        <li>
            <Link href='/login/loginstudent'  >student lognin</Link>
        </li>
        <li>
            <Link href='/login/loginteacher'  >teacher lognin</Link>
        </li>
    </ul>
    {children}</div>;
}
