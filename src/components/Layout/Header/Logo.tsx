import React from "react"
import Link from "next/link"
import {CONFIG} from "site.config"
import Image from "next/image"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/">
      <a aria-label={CONFIG.blog.title}>
        <div className="flex items-center">
          <Image
            src="/code.png"
            className="object-cover"
            alt="SVG icon"
            width="32"
            height="32"
          />
          <div className="ml-2 text-black dark:text-white header-name">
            {CONFIG.blog.title}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Logo
