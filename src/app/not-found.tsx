import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' grid h-screen place-content-center justify-items-center items-center gap-4'>
      <h2 className='z-10 text-4xl font-bold'>UUPS esta página no existe!</h2>
   
      <Link className='z-10 hover:underline' href="/">Volver a inicio</Link>
    </div>
  )
}