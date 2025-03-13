"use client"

import { useApi } from "@/components/providers/DataProvider"

export default function Footer() {
  const { data } = useApi()
  const { attributes: about, html } = data.about
  return (
    <div className="container bg-secondary py-8 lg:py-16 xl:py-24 2xl:rounded-3xl">
      <div className="relative flex flex-col items-center">
        <div className="relative flex w-full max-w-screen-md flex-col items-start gap-2">
          <h4 className="text-2xl font-light text-primary">{about.title}</h4>
          <div
            className="prose lg:prose-lg xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
