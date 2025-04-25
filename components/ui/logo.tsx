import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
  size?: "small" | "medium" | "large"
}

export function Logo({ variant = "default", size = "medium" }: LogoProps) {
  const logoSrc = variant === "white" ? "/logo-white.svg" : "/logo.svg"

  const dimensions = {
    small: { width: 120, height: 36 },
    medium: { width: 200, height: 60 },
    large: { width: 400, height: 120 },
  }

  const { width, height } = dimensions[size]

  return (
    <Link href="/" className="flex items-center">
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Zoolyum Logo"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
      />
    </Link>
  )
}
