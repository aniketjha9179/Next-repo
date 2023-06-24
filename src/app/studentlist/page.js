import Link from "next/link";

export default function studentlist() {
  return (
    <div>
      <h1>student list</h1>
      <ul>
        <li>
          <Link href="/studentlist/Aniket-Jha"> Aniket Jha</Link>
        </li>
        <li>
          <Link href="/studentlist/Aniket"> Aniket</Link>
        </li>

        <li>
          <Link href="/studentlist/tony"> tony </Link>
        </li>
        <li>
          <Link href="/studentlist/batman"> batman </Link>
        </li>
      </ul>
    </div>
  );
}
