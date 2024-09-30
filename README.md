# Static Markdown Website

This is a minimalist yet powerful technical documentation website built with Next.js, TypeScript, Tailwind CSS, and markdown files.

[Live Demo](https://static-markdown.oxitorenk.com/)

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

We welcome and appreciate any contributions that improve the project! Whether you’re fixing bugs, adding new features, improving documentation, or enhancing the design, your efforts are valuable.

### How to Contribute

1. **Fork the repository**  
   Navigate to the repository on GitHub and click the "Fork" button in the top right to create your own copy of the project.

2. **Clone your fork**  
   Once you’ve forked the repository, clone your copy locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/static-markdown-website.git
   ```

3. **Create a new branch**  
   It's best to make your changes in a separate branch to keep your work organized and to avoid issues when pulling future updates:
   ```bash
   git checkout -b your-branch-name
   ```

4. **Make your changes**  
   You can now start making your changes! Ensure that your code follows the project's coding standards and best practices.

   - **For new features or major changes**, it's a good idea to discuss your plans by opening an issue first.
   - **Bug fixes** should come with a description of the issue being fixed.
   - **Improvements to the documentation** should ensure clarity and ease of understanding.

5. **Test your changes**  
   After implementing your changes, make sure everything works correctly by running the project locally:
   ```bash
   npm run dev
   ```
   Test across different pages and content to ensure the changes don’t break anything.

6. **Commit your changes**  
   Once you're happy with your modifications and have tested thoroughly, commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes made"
   ```

7. **Push to your fork**  
   Push your changes to your forked repository:
   ```bash
   git push origin your-branch-name
   ```

8. **Open a pull request**  
   Go to the original repository on GitHub and click the "New Pull Request" button. Select your branch and provide a detailed description of the changes you made, including any related issues, the purpose of the change, and any considerations or trade-offs.

### Guidelines

To ensure a smooth collaboration, please adhere to the following guidelines:

- **Follow the project style**: Ensure that your code follows the established style and conventions of the project.
- **Write descriptive commit messages**: Each commit message should clearly explain the purpose of the change.
- **Respect the file structure**: If you're adding new content, features, or sections, maintain the existing file organization.
- **Write tests**: If you’re contributing code, especially new features or bug fixes, please include appropriate tests where applicable.
- **Check for open issues**: Before starting any major work, browse through the open issues to avoid duplicating efforts. Feel free to comment on issues if you're planning to work on one.
- **Be responsive**: After submitting a pull request, keep an eye on the discussion in case reviewers have questions or request changes.

### Need Help?

If you have any questions or need assistance while contributing, feel free to:
- Open a new issue with your query.
- Contact the project maintainers through GitHub discussions or issues.

## License

This project is licensed under the [MIT License](LICENSE).
