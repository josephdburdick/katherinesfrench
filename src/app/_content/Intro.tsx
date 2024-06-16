"use client"

import Icon from "@/components/global/Icon"
import { useApi } from "@/components/providers/DataProvider"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

function Intro() {
  const { data } = useApi()
  const { attributes: intro, html } = data.intro

  const { linkedin, resume } = data.contact.attributes.links
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <div className="prose-scale flex flex-col gap-12 py-12">
            <small className="flex items-center gap-2 font-semibold">
              <Icon.mapPin /> {intro.location}
            </small>
            <h1>
              {intro.heading1}
              <br />
              {intro.heading2}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className="flex flex-wrap items-center gap-12">
              <a
                className={buttonVariants({ size: "lg" })}
                href={linkedin.href}
              >
                {linkedin.text}
              </a>
              <a
                className={buttonVariants({ variant: "link", size: "lg" })}
                href={resume.href}
              >
                {resume.text}
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <div className="flex aspect-square w-96 max-w-full items-center justify-center overflow-hidden rounded-full bg-secondary">
            <Image
              width={intro.picture.width}
              height={intro.picture.height}
              alt={intro.picture.alt}
              src={intro.picture.src}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
