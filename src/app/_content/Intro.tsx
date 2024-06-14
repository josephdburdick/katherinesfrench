"use client"

import { useApi } from "@/components/providers/DataProvider"

function Intro() {
  const { data } = useApi()
  return <div className="flex flex-col items-center justify-center"></div>
}

export default Intro
