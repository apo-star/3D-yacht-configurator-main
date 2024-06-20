import Loading from '@/components/loading'
import Title from './Title'
import { Home } from './_components/Home'

export default async function HomePage() {
  return (
    <>
      <div className=" select-none bg-zinc-900">
        <Title />
        <Loading />
        <Home />
      </div>
    </>
  )
}
