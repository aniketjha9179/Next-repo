'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation'

const Login =()=>{
  const router = useRouter();
  const navigate = (page)=>{
    router.push('/login/'+ page)


  }

  return(
    <div>
      <h1>
        hello login page
        <Link href= "/" >Go TO Home</Link>
        <br />
        <button onClick={()=>navigate('loginstudent')} > login for student </button>
        <button onClick={()=>navigate('loginteacher')} > login for teaacher </button>

        
      </h1>
    </div>
  )
}

export default Login;