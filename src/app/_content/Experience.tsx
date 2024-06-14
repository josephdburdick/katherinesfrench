"use client"

import DateSpan from "@/components/global/DateSpan"
import { useApi } from "@/components/providers/DataProvider"
import { Experience, Role } from "@/lib/types"
import { cn } from "@/lib/utils"

export default function Experience() {
  const { data } = useApi()
  const experience: Experience = data.experience.attributes
  console.log(experience)
  const renderRole = (role: Role, key: number) => (
    <li key={`role-${key}`} className="grid gap-2">
      <div className="grid grid-cols-12">
        <div className="col-span-12 font-semibold md:col-span-8 md:col-start-4"></div>
      </div>
      <ul className="grid-auto-rows grid items-start gap-8">
        {JSON.stringify(role)}
      </ul>
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
