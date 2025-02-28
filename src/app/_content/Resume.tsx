"use client"

import BodyText from "@/components/global/BodyText"
import { useApi } from "@/components/providers/DataProvider"
import Image from "next/image"
import React from "react"

export default function Resume() {
  const { data } = useApi()
  const intro = data.intro.attributes
  return (
    <div className="mx-auto mt-10 max-w-xl p-6">
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

      {/* About Section */}
      <Section title="About">
        <BodyText>
          Administrator and customer service specialist with an unwavering
          passion and energy for people. I believe the best customer experiences
          come from a personable, positive, and enthusiastic demeanor, which is
          reflected consistently through my work.
        </BodyText>
      </Section>

      {/* Work Experience Section */}
      <Section title="Work Experience">
        {/* Job 1 */}
        <div className="mt-4">
          <h3 className="font-bold">Bartender at Various Locations</h3>
          <p className="text-sm text-gray-500">
            2017 – Now | Richmond, VA and New York City, NY
          </p>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>
              Delivered exceptional customer service in fast-paced, high-volume
              environments.
            </li>
            <li>Developed marketing strategies to enhance brand visibility.</li>
            <li>Optimized operational efficiency and minimized waste.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mt-4">
          <h3 className="font-bold">Manager at Tre Trattoria</h3>
          <p className="text-sm text-gray-500">
            2022 – Now | New York City, NY
          </p>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Managed team operations and ensured optimal performance.</li>
            <li>Oversaw financial processes and supply orders.</li>
          </ul>
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Education">
        <div className="mt-4">
          <h3 className="font-bold">Bachelor of Arts in Art History</h3>
          <p className="text-sm text-gray-500">
            2014 – 2018 | Virginia Commonwealth University
          </p>
          <p className="text-gray-700">Cum Laude</p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Contact">
        <BodyText>
          <p className="mt-2">
            <a
              href="mailto:katherinesfrench@gmail.com"
              className="hover:underline"
            >
              katherinesfrench@gmail.com
            </a>
          </p>
        </BodyText>
      </Section>
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
