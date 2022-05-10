
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function PrincingPage() {
  return (
    <>
      <h1>Princing</h1>
      <h1 className={'title'}>
        Ir a 
        <Link href='/'> 
          <a>Home</a>
        </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/princing.jsx</code>
      </p>
    
    </>


  
  )
}


PrincingPage.getLayout = function getLayout (page : JSX.Element) {
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}