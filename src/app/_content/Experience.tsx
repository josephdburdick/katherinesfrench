"use client"

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
      <div className="grid items-center justify-center gap-10 lg:grid-cols-2">
        <span className="relative">
          <Image
            className="rounded-xl"
            objectFit="cover"
            src={role.picture.src}
            alt={role.picture.alt}
            width={role.picture.width}
            height={role.picture.height}
          />
          <span className="absolute inset-0 rounded-xl bg-primary mix-blend-soft-light"></span>
        </span>
        <div className="prose space-y-4 lg:prose-lg xl:prose-xl">
          <small>
            <DateSpan date={role.date} />
          </small>
          <div
            dangerouslySetInnerHTML={{
              __html: convertNewLinesToHTML(role.description),
            }}
          ></div>
        </div>
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
