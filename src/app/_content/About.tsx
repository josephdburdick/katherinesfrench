"use client"

//import ExternalLink from "@/components/global/ExternalLink"
import { useApi } from "@/components/providers/DataProvider"

export default function Footer() {
  const { data } = useApi()
  const about = data.about.attributes
  const { links } = about

  return (
    <div className="relative flex flex-col items-center">
      {/* About {JSON.stringify(links)} */}
    </div>
  )
}
