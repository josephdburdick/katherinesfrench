"use client"

import { useApi } from "@/components/providers/DataProvider"

function Intro() {
  const { data } = useApi()
  const { attributes, html } = data.intro

  // const renderLinks = Object.values(data.contact.links).map(
  //   (link: { href: string; text: string }, key: number) => (
  //     <ExternalLink href={link.href} key={key}>
  //       {link.text}
  //     </ExternalLink>
  //   ),
  // )
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <div className="prose-scale flex flex-col space-y-4">
            <h1>
              {attributes.heading1}
              <br /> {attributes.heading2}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {/* {renderLinks} */}
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <div className="flex aspect-square w-96 max-w-full items-center justify-center rounded-full bg-secondary">
            image
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
