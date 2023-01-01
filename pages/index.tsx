import { useUser } from '@auth0/nextjs-auth0'
import Layout from '../components/layout'
import Dashboard from '../components/dashboard'

const Home = () => {
  const { user, isLoading } = useUser()

  return (
    <Layout user={user} loading={isLoading}>
      <div className='flex flex-col items-center justify-evenly min-h-[calc(100vh-4rem)]'>
        <Dashboard />
      </div>
    </Layout>
  )
}

// fast/cached SSR page
export default Home
