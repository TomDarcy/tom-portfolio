import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/thinking')

export type Essay = {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export type EssayMeta = Omit<Essay, 'content'>

export function getAllEssays(): EssayMeta[] {
  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.mdx'))

  const essays = files.map((filename) => {
    const filePath = path.join(contentDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description,
    }
  })

  return essays.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getEssayBySlug(slug: string): Essay {
  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.mdx'))

  for (const filename of files) {
    const filePath = path.join(contentDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    if (data.slug === slug) {
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      }
    }
  }

  throw new Error(`Essay not found: ${slug}`)
}
