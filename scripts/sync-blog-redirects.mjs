import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(rootDir, 'src', 'content', 'blog')
const vercelConfigPath = path.join(rootDir, 'vercel.json')

async function findMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...await findMarkdownFiles(entryPath))
    } else if (entry.isFile() && /\.(md|markdown)$/i.test(entry.name)) {
      files.push(entryPath)
    }
  }

  return files
}

const files = await findMarkdownFiles(contentDir)
const slugs = new Set(
  files.map(file => {
    const relativePath = path.relative(contentDir, file).replaceAll('\\', '/')
    return relativePath.replace(/\.(md|markdown)$/i, '')
  })
)

const redirects = [...slugs]
  .sort((a, b) => a.localeCompare(b))
  .map(slug => ({
    source: `/${slug}`,
    destination: `/blog/${slug}`,
    permanent: true
  }))

const vercelConfig = JSON.parse(await readFile(vercelConfigPath, 'utf8'))
vercelConfig.redirects = redirects

await writeFile(vercelConfigPath, `${JSON.stringify(vercelConfig, null, 2)}\n`)

console.log(`Updated ${redirects.length} blog redirects in vercel.json`)
