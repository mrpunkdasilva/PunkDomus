# Punk Domus Blog

A minimalist blog built with Nuxt.js and @nuxt/content, featuring a cyberpunk aesthetic theme.

![Punk Domus Logo](/static/punk_domus.svg)

## Features

- Markdown-based blog posts
- Cyberpunk-inspired design
- Responsive layout
- Static site generation
- Image support for blog posts

## Tech Stack

- Nuxt.js 2.x
- @nuxt/content
- Vue.js 2.7
- Custom CSS styling

## Prerequisites

- Node.js (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd nuxt-punk-domus
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Project Structure

- `content/blog/` - Markdown files for blog posts
- `components/` - Vue components (HeaderMain)
- `layouts/` - Page layouts with global styling
- `pages/` - Application routes and views
- `public/resources/` - Blog post images
- `static/` - Static assets (punk_domus.svg)

## Creating Blog Posts

1. Add a new markdown file in `content/blog/`
2. Include the following frontmatter:
```markdown
---
title: Your Post Title
description: Post description
slug: url-friendly-slug
img: image-name.jpg
---
```
3. Place corresponding images in `public/resources/`

## Building for Production

```bash
# Generate static site
npm run generate
# or
yarn generate

# Serve production build
npm run start
# or
yarn start
```

## Customization

- Global styles can be modified in `layouts/default.vue`
- Header styling in `components/HeaderMain.vue`
- Blog post layout in `pages/_slug.vue`
- Site configuration in `nuxt.config.js`

## License

[LICENSE](LICENSE)

## Author

Mr Punk da Silva
