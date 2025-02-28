import api from "@/api"
import Footer from "@/components/global/Footer"
import Header from "@/components/global/Header"
import { DataProvider } from "@/components/providers/DataProvider"

import Resume from "../_content/Resume"

export default async function cv() {
  const data = await api()

  return (
    <DataProvider initialData={data}>
      <Header />
      <Resume />
      <Header />
      <Footer />
    </DataProvider>
  )
}
