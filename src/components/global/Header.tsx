"use client"

import { useApi } from "@/components/providers/DataProvider"
import { cn } from "@/lib/utils"

import ExternalLink from "./ExternalLink"

export default function Header() {
  const { data } = useApi()
  const { name } = data.site.attributes
  const { linkedin } = data.contact.attributes.links
  return (
    <header
      className={cn(
        "container flex items-center justify-between py-4 text-primary md:py-8",
      )}
    >
      <h1 className="inline-flex flex-nowrap items-center gap-2 text-xl font-bold">
        <a href="/">{name}</a> ✨
      </h1>
      <div className="font-semi flex items-end justify-between gap-4 md:items-center">
        <ExternalLink href={linkedin.url}>{linkedin.text}</ExternalLink>
      </div>
    </header>
  )
}
