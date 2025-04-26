import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
  size?: "small" | "medium" | "large"
  linkWrapper?: boolean
}

export function Logo({ variant = "default", size = "medium", linkWrapper = true }: LogoProps) {
  const logoSrc = variant === "white" ? "/logo-white.svg" : "/logo.svg"

  const dimensions = {
    small: { width: 120, height: 36 },
    medium: { width: 200, height: 60 },
    large: { width: 400, height: 120 },
  }

  const { width, height } = dimensions[size]

  const logoImage = (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="Zoolyum Logo"
      width={width}
      height={height}
      priority
      className="h-auto w-auto"
    />
  )

  if (linkWrapper) {
    return (
      <Link href="/" className="flex items-center">
        {logoImage}
      </Link>
    )
  }

  return <div className="flex items-center">{logoImage}</div>
}
