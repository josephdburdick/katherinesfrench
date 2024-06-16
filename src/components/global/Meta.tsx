import api from "@/api"

export default async function Meta() {
  const data = await api()
  const {
    title,
    description,
    keywords,
    author,
    viewport,
    charset,
    robots,
    open_graph,
    twitter,
    linkedin,
  } = data.site.attributes

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content={viewport} />
      <meta charSet={charset} />
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={open_graph.type} />
      <meta property="og:title" content={open_graph.title} />
      <meta property="og:description" content={open_graph.description} />
      <meta
        property="og:image"
        content={open_graph.image.replace("${basePath}", "")}
      />
      <meta property="og:url" content={open_graph.url} />
      <meta property="og:site_name" content={open_graph.site_name} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta
        name="twitter:image"
        content={twitter.image.replace("${basePath}", "")}
      />
      <meta name="twitter:site" content={twitter.site} />

      {/* LinkedIn */}
      <meta property="linkedin:profile" content={linkedin.profile} />
    </>
  )
}
