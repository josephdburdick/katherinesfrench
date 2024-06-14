import api from "@/api"
import Footer from "@/components/global/Footer"
import Header from "@/components/global/Header"
import { DataProvider } from "@/components/providers/DataProvider"

import About from "./_content/About"
import Experience from "./_content/Experience"
import Intro from "./_content/Intro"

export default async function Home() {
  const data = await api()

  return (
    <DataProvider initialData={data}>
      <div className="max-h-[100dvh] bg-yellow-50">
        <Header />
        <Intro />
        <About />
        <Experience />
        <Header />
        <Footer />
      </div>
    </DataProvider>
  )
}
