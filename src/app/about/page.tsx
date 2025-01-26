import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {

  LinkedInIcon,

} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I’m Tom d'Arcy, I believe digital manufacturing shouldn't be as hard as we make it, I founded FactoryPulse to help UK manufacturers transform.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Tom d&apos;Arcy, I build applications, websites and Industry 4.0 PoC&apos;s
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember, and throughout my life I&apos;ve been obsessed with buidling. I&apos;ve been building digital solutions since 18 and have deployed applications that have been used by factories worldwide.
            </p>
            <p>
              I have worked across a range of industries, from Aerospace, to Pharma and Semiconductors. All have one thing in common, they all struggle to adopt digital technology. I founded FactoryPulse to help UK manufacturers transform.
            </p>
            <p>
              This isn&apos;t just a job for me, it&apos;s a passion. I believe that digital manufacturing shouldn&apos;t be as hard as we make it. I&apos;m on a mission to make it easier for manufacturers to adopt digital technology and transform their businesses.
            </p>
            <p>
              It is my belief that the future of manufacturing is digital, and I&apos;m excited to be a part of it. I&apos;m always looking for new opportunities to help manufacturers transform, so if you&apos;re interested in working together, please get in touch.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">

            <SocialLink href="https://www.linkedin.com/in/thomasdarcyuk/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:tom.darcy@factorypulse.app"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              tom.darcy@factorypulse.app
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
