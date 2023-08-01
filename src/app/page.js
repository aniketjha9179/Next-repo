import Link from 'next/link'
import React from 'react'


const Page = () => {
  return (
    <div>
      <h2>home page</h2>
      <Link href={'./addproduct'} >Add products</Link>
    </div>
  )
}

export default Page