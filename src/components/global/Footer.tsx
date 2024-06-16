"use client"
export default function Footer() {
  const year = new Date().getFullYear()
  return <div className="container pb-8">&copy; {year}</div>
}
