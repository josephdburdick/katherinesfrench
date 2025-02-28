import api from "@/api"
import Footer from "@/components/global/Footer"
import Header from "@/components/global/Header"
import { DataProvider } from "@/components/providers/DataProvider"

import CV from "../_content/CV"

export default async function cv() {
  const data = await api()

  return (
    <DataProvider initialData={data}>
      <Header />
      <CV />
      <Header />
      <Footer />
    </DataProvider>
  )
}
