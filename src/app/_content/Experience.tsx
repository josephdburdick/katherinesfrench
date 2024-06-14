"use client"

import { useApi } from "@/components/providers/DataProvider"
import { Experience as ExperienceType, Role } from "@/lib/types"
import { cn } from "@/lib/utils"

export default function Experience() {
  const { data } = useApi()
  const experience: ExperienceType = data.experience.attributes
  console.log(experience)
  const renderRole = (role: Role, key: number) => (
    <li key={`role-${key}`}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="aspect-video bg-secondary"></div>
        <div>{role.description}</div>
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
  )}
