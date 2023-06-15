'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation'

const Login =()=>{
  const router = useRouter();
  const navigate = (page)=>{
    router.push('/login/'+ page)
    router.push('/about/'+page)


  }

  return(
    <div>
      <h1 className="heading">
        hello login page
        <Link href= "/" >Go TO Home</Link>
        <br />
        <button onClick={()=>navigate('loginstudent')} > login for student </button>
        <button onClick={()=>navigate('loginteacher')} > login for teaacher </button>
        <button onClick={()=>navigate('aboutstudent')} > about page for student </button>


        
      </h1>
    </div>
  )
}

export default Login;