import Link from "next/link";
import './layout.css'


export default function Layout({ children }) {
  return <div>
    <ul className="login-menu">
        <li>
            <h4>
                about navbar
            </h4>
        </li>
        <li>
            <Link href='/login'  >login main</Link>
        </li>
        <li>
            <Link href='/about/aboutstudent'  >student about</Link>
        </li>
        <li>
            <Link href='/about/abouteacher'  > about teacher </Link>
        </li>
    </ul>
    {children}</div>;
}
