"use client"

import { useApi } from "@/components/providers/DataProvider"
import { cn } from "@/lib/utils"

import Icon from "./Icon"

export default function Header() {
  const { data } = useApi()
  const { name } = data.site

  return (
    <header className={cn("container z-50 flex items-center justify-between")}>
      <h1>
        <Icon.sparkles /> <span>{name}</span>
      </h1>
      <div className="flex items-center gap-2">
        <div className="flex items-end justify-between gap-4 md:items-center"></div>
      </div>
    </header>
  )
}
