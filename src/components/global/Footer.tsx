"use client"
export default function Footer() {
  const year = new Date().getFullYear()
  return <div className="container">&copy; {year}</div>
}
