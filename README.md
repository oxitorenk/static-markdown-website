
# Static Markdown Website

This is a minimalist yet powerful technical documentation website built with Next.js, TypeScript, Tailwind CSS, and markdown files.

## Features

- **Static Site Generation:** Utilizes Next.js for static site generation, enabling fast loading times and improved SEO.
- **Markdown Support:** Content is managed through Markdown files, making it easy to write and maintain documentation.
- **Meta Data Handling:** Utilizes [gray-matter](https://www.npmjs.com/package/gray-matter) to parse YAML front matter from Markdown files for metadata.
- **Markdown Rendering:** Uses [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) for converting Markdown to JSX for rendering flexibility.
- **Improved Typography:** Enhances Markdown rendering with [tailwind-typography](https://www.npmjs.com/package/@tailwindcss/typography) for better readability and aesthetics.
- **Beautiful Design:** Based on the [Spinal CSM Template](https://spinalcms.com/resources/documentation-theme-built-with-tailwind-css/), a clean and minimalist Tailwind CSS template for modern web development.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/akbulutoguzhan/static-markdown-website.git
    ```

2. **Install dependencies:**
    ```bash
    npm install gray-matter markdown-to-jsx
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Usage

1. Create a folder under the `contents` directory; this will be your section.
2. Create an `info.md` file under the new section folder; this contains metadata.
```markdown
---
title: "Introduction"
order: 1 <!--- order of the section between other sections --->
---
```
3. Create a folder named `subcontents` under the created section; this will hold your section contents.
4. Create markdown files as desired within the `subcontents` folder.
```markdown
---
title: "FAQ"
description: ""
order: 5 <!--- order of the content between other contents in the same section --->
---

Your content goes here!
```

**The final file structure for the contents should look like this:**
```bash
├── src
│   ├── contents
│   │   ├── section-1
│   │   │   ├── info.md
│   │   │   ├── subcontents
│   │   │   │   ├── content-1.md
│   │   │   │   ├── content-2.md
│   │   │   │   ├── content-3.md
│   │   ├── section-2
│   │   │   ├── info.md
│   │   │   ├── subcontents
│   │   │   │   ├── content-1.md
│   │   ├── section-3
│   │   │   ├── info.md
│   │   │   ├── subcontents
│   │   │   │   ├── content-1.md
│   │   │   │   ├── content-2.md
└── rest of the directories
```

## Customization

- **Style**: You can modify the tailwind shorthands to change the style.
- **Components**: Extend or modify components in the `components` directory.
- **Layouts**: You can change the following files to modify website layouts.
	- `app/[parent]/[content]/page.tsx` (content page)
	- `app/page.tsx` (landing page)
	- `app/layout.tsx` (overall layout of the every page)

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for bug fixes, features, or enhancements.

## License

This project is licensed under the [MIT License](LICENSE).
