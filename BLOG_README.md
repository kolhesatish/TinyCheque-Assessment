# Blog Integration with Astro

This project now includes a blog section powered by Astro, seamlessly integrated with your Next.js application.

## 🚀 Quick Start

### Development

To run both the main app and blog in development mode:

```bash
# Run both servers simultaneously
npm run dev:all

# Or run them separately:
npm run dev        # Next.js app on http://localhost:3000
npm run dev:blog   # Astro blog on http://localhost:3002
```

### Production Build

```bash
# Build both applications
npm run build:all

# Or build separately:
npm run build       # Build Next.js app
npm run build:blog  # Build Astro blog
```

## 📁 Project Structure

```
chakra/
├── app/                    # Next.js app
├── components/            # Next.js components
│   └── BlogSection.tsx    # Blog preview section for main site
├── blog/                  # Astro blog application
│   ├── src/
│   │   ├── components/    # Astro/React components
│   │   ├── content/       # Blog posts (Markdown)
│   │   ├── layouts/       # Page layouts
│   │   └── pages/         # Blog pages
│   └── astro.config.mjs   # Astro configuration
└── public/               # Static assets
```

## ✨ Features

### Main Site Integration
- **Blog Section**: Preview of latest blog posts on your main site
- **Seamless Navigation**: Links from main site to blog
- **Consistent Styling**: Chakra UI components used throughout

### Astro Blog Features
- **Fast Performance**: Static site generation with Astro
- **Markdown Support**: Write blog posts in Markdown with frontmatter
- **React Components**: Use React components within Astro for interactivity
- **Chakra UI Styling**: Consistent design with your main application
- **SEO Optimized**: Built-in SEO features and meta tag management

## 📝 Adding Blog Posts

1. Create a new `.md` file in `blog/src/content/blog/`
2. Add frontmatter with metadata:

```markdown
---
title: 'Your Blog Post Title'
description: 'A brief description of your post'
pubDate: 'Nov 01 2024'
heroImage: '/path-to-image.jpg'
---

# Your Blog Post Content

Write your blog post content here using Markdown.
```

3. The post will automatically appear on your blog index page

## 🎨 Customization

### Styling
- Blog components use Chakra UI for consistency
- Modify `blog/src/components/ChakraProvider.tsx` to customize theme
- Update CSS in blog layouts for custom styling

### Navigation
- Update `blog/src/components/BlogNavigation.tsx` for navigation changes
- Modify links in `components/BlogSection.tsx` for main site integration

### Content
- Blog posts are in `blog/src/content/blog/`
- Update sample posts or add new ones
- Modify `blog/src/pages/index.astro` for blog homepage customization

## 🔧 Configuration

### Astro Configuration
The blog is configured in `blog/astro.config.mjs`:
- **Base URL**: Set to `/blog` for hosting as subdirectory
- **Output Directory**: Builds to `../public/blog` for integration
- **Integrations**: MDX, Sitemap, and React support

### Development Ports
- Next.js app: `http://localhost:3000`
- Astro blog: `http://localhost:3002`

## 🚀 Deployment

### Option 1: Deploy Together
1. Build both applications: `npm run build:all`
2. Deploy the entire project including the `public/blog` directory

### Option 2: Separate Deployment
1. Deploy Next.js app to your main domain
2. Deploy Astro blog to a subdomain or separate hosting
3. Update links in `BlogSection.tsx` to point to your blog domain

## 📱 Mobile Responsive

Both the main site blog section and the Astro blog are fully responsive and optimized for mobile devices.

## 🔍 SEO Features

- Automatic sitemap generation
- Meta tags and descriptions
- Structured data support
- Fast loading times with Astro's static generation

## 🤝 Contributing

To add new features or modify the blog:

1. For main site changes: Edit files in `components/` and `app/`
2. For blog changes: Edit files in `blog/src/`
3. Test changes with `npm run dev:all`
4. Build and test production with `npm run build:all`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Chakra UI Documentation](https://chakra-ui.com/)
- [Next.js Documentation](https://nextjs.org/docs)