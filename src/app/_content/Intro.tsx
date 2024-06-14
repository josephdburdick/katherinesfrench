"use client"

import { useApi } from "@/components/providers/DataProvider"

function Intro() {
  const { data } = useApi()
  return (
      <div className="flex h-[95dvh] max-h-[2000px] min-h-[600px] flex-col items-center justify-center">
      </div>
  )}

export default Intro
