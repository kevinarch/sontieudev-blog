import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"

const ServiceCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🌟 Services </div>
      <ServiceComponent link="https://files.sontieu.dev" name="Files" />
      <ServiceComponent link="https://tools.sontieu.dev" name="Tools" />
    </>
  )
}

type Props = {
  link: string
  name: string
}

const ServiceComponent: React.FC<Props> = ({ link, name }) => {
  return (
    <>
      <ul className="rounded-2xl mb-4 bg-white dark:bg-zinc-700 p-1 flex flex-col">
        <li>
          <a
            href={link}
            rel="noreferrer noindex nofollow"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillCodeSandboxCircle className="text-2xl" />
            <div className="text-sm">{name}</div>
          </a>
        </li>
      </ul>
    </>
  )
}

export default ServiceCard
