
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home</h1>
      <h1 className={'title'}>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className='code'>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
