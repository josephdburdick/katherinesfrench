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
      <div className="grid grid-cols-12 lg:gap-12">
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <div className="prose-scale flex flex-col gap-12 py-12">
            <small className="hidden items-center gap-1 font-medium lg:flex">
              <Icon.mapPin /> {intro.location}
            </small>
            <h1 className="text-pretty">
              {intro.heading1}
              <br />
              {intro.heading2}
            </h1>
            <div
              className="text-pretty"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <a className={buttonVariants({ size: "lg" })} href={linkedin.url}>
                Connect with me on LinkedIn
              </a>
              <a
                className={buttonVariants({ variant: "link", size: "lg" })}
                href={resume.url}
              >
                {resume.text}
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          {/* <div className="w-95 h-95 relative flex max-w-full items-center justify-center overflow-hidden rounded-full"> */}
          <Image
            width={intro.picture.width}
            height={intro.picture.height}
            alt={intro.picture.alt}
            src={intro.picture.src}
            className="h-72 w-72 rounded-full object-cover object-center md:h-96 md:w-96"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Intro
