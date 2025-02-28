"use client"

import BodyText from "@/components/global/BodyText"
import DateSpan from "@/components/global/DateSpan"
import { useApi } from "@/components/providers/DataProvider"
import convertNewLinesToHTML from "@/lib/convertNewLinesToHTML"
import { Experience as ExperienceType, Role } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Experience() {
  const { data } = useApi()
  const experience: ExperienceType = data.experience.attributes
  const renderRole = (role: Role, key: number) => (
    <li key={`role-${key}`}>
      <div className="grid items-start justify-center gap-10 md:grid-cols-2">
        <small className="md:col-start-2 md:row-start-1 md:text-right">
          <DateSpan date={role.date} />
        </small>
        <span className="relative md:row-start-2 md:pt-2">
          <Image
            className="w-full rounded-xl"
            objectFit="cover"
            src={role.picture.src}
            alt={role.picture.alt}
            width={role.picture.width}
            height={role.picture.height}
          />
          <span className="absolute inset-0 rounded-xl bg-primary/50 mix-blend-soft-light"></span>
        </span>
        <BodyText
          className="prose space-y-4 lg:prose-lg xl:prose-xl md:row-start-2"
          dangerouslySetInnerHTML={{
            __html: convertNewLinesToHTML(role.description),
          }}
        />
      </div>
    </li>
  )

  const renderExperiences = (
    <div className="container">
      <ul className="grid-auto-rows grid gap-14">
        {experience.roles.map(renderRole)}
      </ul>
    </div>
  )

  return (
    <div className={cn("py-8 lg:py-24 xl:py-36")}>
      <div className="container prose-scale space-y-4">
        <h4 className="text-2xl font-light">Experience</h4>
      </div>
      <div className="mt-8 flex w-full flex-1">{renderExperiences}</div>
    </div>
  )
}
