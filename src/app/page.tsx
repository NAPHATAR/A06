import Banner from '@/components/Banner'
import CardPanel from '../components/CardPanel'

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto py-8">
        <div className="bg-gray-100 rounded-md shadow-lg p-8 w-full">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
            Participating Hospitals
          </h1>
          <CardPanel />
        </div>
      </div>
    </div>
  )
}