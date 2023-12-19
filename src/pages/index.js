import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/utils/navbar'
import Header from '@/components/utils/header'
import SubHeader from '@/components/utils/subtitle'
import InputBox from '@/components/input/input-fields'
import ProgressBar from '@/components/utils/progress-bar'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <ProgressBar />
      <Header />
      <SubHeader />
      <InputBox />
      <Navbar />
    </div>
  )
}
