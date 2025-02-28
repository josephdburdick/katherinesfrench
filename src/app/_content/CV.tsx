"use client"

import BodyText from "@/components/global/BodyText"
import DateSpan from "@/components/global/DateSpan"
import { useApi } from "@/components/providers/DataProvider"
import Image from "next/image"
import React from "react"

interface Section {
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

export default function CV() {
  const { data } = useApi()
  const intro = data.intro.attributes
  const cvData = data.cv.attributes
  const { sections } = cvData
  return (
    <div className="relative mx-auto mt-10 max-w-xl p-6">
      <span className="relative -mt-12 flex items-center justify-center">
        <Image
          width={intro.picture.width}
          height={intro.picture.height}
          alt={intro.picture.alt}
          src={intro.picture.src}
          className="h-auto w-24 rounded-b-full object-cover object-center md:w-32"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </span>
      <div className="mt-6 [&>section+section]:mt-6 [&>section]:p-6">
        {sections?.map((section: Section, index: number) => (
          <section key={index}>
            <Title>{section.title}</Title>
            <div className="[&>*+*]:mt-8">
              {section?.items ? (
                section.items.map((item, i: number) => (
                  <div key={i} className="mt-4 space-y-1">
                    <h3 className="font-bold">{item.role || item.degree}</h3>
                    <div className="flex justify-between text-xs">
                      {item.location && <span>{item.location}</span>}
                      <DateSpan date={item.date} />
                    </div>
                    {item?.details ? (
                      <ul className="list-disc pl-5 pt-1.5 text-sm text-gray-700 [&>li]:mt-2">
                        {Array.isArray(item.details) &&
                          item.details.map((detail, j) => {
                            return <li key={j}>{detail}</li>
                          })}
                      </ul>
                    ) : null}
                  </div>
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
      <BodyText className="text-base">{children}</BodyText>
    </div>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-light">{children}</h2>
}
