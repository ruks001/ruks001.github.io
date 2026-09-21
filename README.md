# Academic Robotics Portfolio — GitHub Pages Template

A lightweight, multi-page academic portfolio designed for robotics / autonomous-systems researchers.

## Design idea

This template intentionally combines two ideas:

- **Clear academic navigation:** separate pages for research, publications, CV, news, and contact.
- **Card-based presentation:** boxed content areas make projects, research directions, and profile details easy to scan.

It intentionally does **not** include theme switching, GitHub API fetching, React, npm, Jekyll plugins, or paid hosting requirements.

## Pages

- `index.html` — homepage and short profile
- `research.html` — research directions and selected projects
- `publications.html` — full publication list
- `cv.html` — web CV and optional PDF link
- `news.html` — chronological updates
- `contact.html` — contact and professional profiles

## First edits to make

### 1. Edit site-wide information once

Open:

`assets/js/site-config.js`

Replace the placeholder values for your name, role, affiliation, location, email, GitHub, LinkedIn, Scholar, and optional CV PDF path.

### 2. Add your own content

Edit the HTML pages directly. Search for placeholder phrases such as:

- `Research Area One`
- `Publication title goes here`
- `Short news headline`
- `Position Title`
- `Project Title`

Duplicate or remove cards as needed.

### 3. Add a profile photo (optional)

Put an image in `assets/images/`, for example:

`assets/images/profile.jpg`

Then in `index.html`, replace the initials placeholder:

```html
<div class="avatar-placeholder" data-config="shortName">YN</div>
```

with:

```html
<img class="avatar-placeholder" src="assets/images/profile.jpg" alt="Your Name">
```

### 4. Add your CV PDF (optional)

Create a folder such as `assets/files/`, add your CV PDF, and set this in `assets/js/site-config.js`:

```js
cvFile: "assets/files/Your_Name_CV.pdf"
```

## Free GitHub Pages setup

If your GitHub username is `yourusername`, create a **public** repository named:

`yourusername.github.io`

Copy all files from this template into that repository root, then run:

```bash
git add .
git commit -m "Create academic portfolio"
git push origin main
```

In GitHub, open:

**Repository → Settings → Pages**

Choose:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

Your free site will be available at:

`https://yourusername.github.io`

No custom domain is required.

## Local preview

From the repository folder:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Styling

All styling is in:

`assets/css/style.css`

The site uses one fixed light theme with a navy/teal academic-technology palette. No theme framework is required.
