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

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Tom d'Arcy, I believe digital manufacturing shouldn't be as hard as we make it, I founded FactoryPulse to help UK manufacturers transform.",
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
            I&apos;m Tom d&apos;Arcy, I build apps and websites
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve loved making things for as long as I can remember, and throughout my life I&apos;ve been obsessed with building digital solutions. Since I was 18, I&apos;ve been developing and deploying applications that have made a real impact in businesses worldwide.
            </p>
            <p>
              My experience spans across critical industries including Aerospace, Pharmaceuticals, and Semiconductors. What struck me most was a common challenge: the struggle to effectively adopt digital technology. This insight led me to found FactoryPulse, with a mission to help UK manufacturers successfully navigate their digital transformation journey.
            </p>
            <p>
              Beyond manufacturing, I&apos;m passionate about creating impactful digital solutions across all sectors. Whether it&apos;s crafting elegant websites or developing sophisticated mobile applications, I bring the same level of expertise and dedication to every project.
            </p>
            <p>
              Based in Sussex, UK, I&apos;m always eager to collaborate on new projects that challenge the status quo. If you have a vision for your digital presence or need guidance on your technology strategy, let&apos;s connect and explore how we can work together.
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
            <SocialLink href="tel:+447988118326" icon={PhoneIcon}               className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
>
              +44 798 811 8326
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
