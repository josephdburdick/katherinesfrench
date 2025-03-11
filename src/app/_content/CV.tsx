"use client"

import BodyText from "@/components/global/BodyText"
import DateSpan from "@/components/global/DateSpan"
import { useApi } from "@/components/providers/DataProvider"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
  const cv = data.cv.attributes
  const { linkedin } = data.contact.attributes.links
  const { sections } = cv
  return (
    <div className="relative mx-auto mt-10 w-full max-w-xl p-3 md:p-6">
      <Hero
        {...intro.picture}
        link={linkedin}
        className="h-auto w-24 rounded-b-full object-cover object-center md:w-32"
      />
      <div className="mt-6 [&>section+section]:mt-3 md:[&>section+section]:mt-6 [&>section]:p-3 md:[&>section]:p-6">
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

function Hero(
  props: ImageProps & {
    link?: {
      url: string
      text: string
    }
  },
) {
  const { alt, src, link, ...rest } = props
  return (
    <div className="relative -mt-12 flex items-center justify-center gap-4">
      <div className="w-auto">
        <Image
          alt={alt}
          src={src}
          {...rest}
          className="h-16 w-auto rounded-full"
        />
      </div>
      {link && (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "hidden w-fit text-ellipsis whitespace-nowrap rounded-full md:block",
          )}
        >
          {link.url.replace("https://", "")}
        </a>
      )}
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
      <div className="flex flex-row-reverse items-start justify-between gap-4 md:flex-row-reverse lg:grid lg:grid-cols-6">
        <div className="col-span-2 pt-1 text-xs">
          <DateSpan date={item.date} />
        </div>
        <div className="col-span-4 flex flex-col gap-0.5 text-foreground">
          <h3 className="font-medium">{item.role || item.degree}</h3>
          {item.location && <span className="text-xs">{item.location}</span>}
          {item.institution && (
            <span className="text-xs">{item.institution}</span>
          )}
        </div>
      </div>
      {item?.details ? (
        <div className="grid-cols-6 gap-4 lg:grid">
          {Array.isArray(item.details) ? (
            <ul className="col-span-4 col-start-3 list-disc pl-4 pt-1.5 text-sm text-muted lg:pl-0 [&>li]:mt-2">
              {item.details.map((detail, j) => (
                <li key={j} className="text-pretty">
                  {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="col-span-4 col-start-3 pt-1.5 text-sm text-muted">
              {item.details}
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
