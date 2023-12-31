"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  // const pathname = usePathname();
  // console.log(pathname);

  return (
    <div>
      {/* {pathname !== "/about/abouteacher" ? ( */}
        <ul className="login-menu">
          <li>
            <h4>login navbar</h4>
          </li>
          <li>
            <Link href="/login">login main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">student lognin</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">teacher lognin</Link>
          </li>
        </ul>
      {/* ) : null} */}

      {children}
    </div>
  );
}
