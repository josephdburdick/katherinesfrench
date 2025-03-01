type Props = {
  date: {
    start: string
    end: string | null
  }
}

export default function DateSpan({ date }: Props) {
  const renderDate = (dateProp: string | null) => {
    if (!dateProp) return "Now"

    const date = new Date(dateProp)
    const month = date.toLocaleString("default", {
      month: "short",
      timeZone: "UTC",
    })

    const year = date.toLocaleString("default", {
      year: "2-digit",
      timeZone: "UTC",
    })

    return `${month} '${year}`
  }

  return (
    <div className="flex items-center justify-start gap-2 text-primary">
      <time>{renderDate(date.start)}</time>
      <span className="h-px min-w-4 max-w-6 grow border-t border-muted-foreground">
        <span className="sr-only">&mdash;</span>
      </span>
      <time>{renderDate(date.end)}</time>
    </div>
  )
}
