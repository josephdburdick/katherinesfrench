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
          <div className="prose-scale flex flex-col gap-12 py-6 lg:py-12">
            <small className="hidden items-center gap-1 font-medium text-muted lg:flex">
              <Icon.mapPin className="text-primary" /> {intro.location}
            </small>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col-reverse items-center sm:flex-row sm:items-end">
                <h1 className="w-full flex-1 text-pretty text-primary">
                  {intro.heading1}
                  <br />
                  {intro.heading2}
                </h1>

                <span className="relative float-right lg:hidden">
                  <Image
                    width={intro.picture.width}
                    height={intro.picture.height}
                    alt={intro.picture.alt}
                    src={intro.picture.src}
                    className="h-auto w-24 rounded-b-full object-cover object-center md:w-32"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </span>
              </div>
              <div
                className="max-w-2xl text-pretty"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <a
                  className={buttonVariants({ size: "lg" })}
                  href={linkedin.url}
                >
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
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <span className="relative hidden lg:block">
            <Image
              {...intro.picture}
              alt={intro.picture.alt}
              src={intro.picture.src}
              className="h-auto w-72 rounded-b-full object-cover object-center md:w-96"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Intro
