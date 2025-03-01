"use client"

import BodyText from "@/components/global/BodyText"
import DateSpan from "@/components/global/DateSpan"
import { useApi } from "@/components/providers/DataProvider"
import Image, { ImageProps } from "next/image"
import React from "react"

type Section = {
  title: string
  content?: string
  items?: Array<{
    role?: string
    degree?: string
    date: { start: string; end: string | null }
    location?: string
    details?: string[]
    institution?: string
  }>
}

type SectionItemType = NonNullable<Section["items"]>[number]

export default function CV() {
  const { data } = useApi()
  const intro = data.intro.attributes
  const cvData = data.cv.attributes
  const { sections } = cvData
  return (
    <div className="relative mx-auto mt-10 max-w-xl p-6">
      <Hero
        {...intro.picture}
        className="h-auto w-24 rounded-b-full object-cover object-center md:w-32"
      />
      <div className="mt-6 [&>section+section]:mt-6 [&>section]:p-6">
        {sections?.map((section: Section, index: number) => (
          <section key={index}>
            <Title>{section.title}</Title>
            <div className="[&>*+*]:mt-8">
              {section?.items ? (
                section.items.map((item, i: number) => (
                  <SectionItem item={item} key={i} />
                ))
              ) : (
                <BodyText>{section.content}</BodyText>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

function Hero(props: ImageProps) {
  const { alt, src, ...rest } = props
  return (
    <div className="relative -mt-12 flex items-center justify-center">
      <Image alt={alt} src={src} {...rest} />
    </div>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-light text-primary">{children}</h2>
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 rounded-lg p-6">
      <Title>{title}</Title>
      <BodyText>{children}</BodyText>
    </div>
  )
}

function SectionItem({ item }: { item: SectionItemType }) {
  return (
    <div className="mt-4 space-y-1 text-base">
      <div className="flex flex-col-reverse items-start justify-between gap-4 lg:grid lg:grid-cols-6">
        <div className="col-span-2 text-xs lg:pt-1">
          <DateSpan date={item.date} />
        </div>
        <div className="col-span-4 flex flex-col gap-0.5 text-foreground">
          <h3 className="font-medium">{item.role || item.degree}</h3>
          {item.location && <span className="text-xs">{item.location}</span>}
        </div>
      </div>
      {item?.details ? (
        <div className="grid-cols-6 gap-4 lg:grid">
          <ul className="col-span-4 col-start-3 list-disc pl-4 pt-1.5 text-sm text-muted lg:pl-0 [&>li]:mt-2">
            {Array.isArray(item.details) &&
              item.details.map((detail, j) => {
                return (
                  <li key={j} className="text-pretty">
                    {detail}
                  </li>
                )
              })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
