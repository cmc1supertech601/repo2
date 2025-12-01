# GitHub Pages Deployment Guide

This guide will help you deploy your Dad Construction website to GitHub Pages.

## Prerequisites

✅ Repository is already set up at: `https://github.com/cmc1supertech601/dad-construction`
✅ `gh-pages` package is installed
✅ Next.js is configured for static export

## Deployment Steps

### 1. Build and Deploy

Run the following command to build and deploy your site:

npm run deploy
```

### Option 2: Automatic Deployment (Recommended)

We have set up a GitHub Actions workflow (`.github/workflows/nextjs.yml`) that automatically deploys your site whenever you push to the `main` branch.

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```
2. Go to the **Actions** tab in your repository to see the deployment progress.

### Manual Deployment (Alternative)

If you prefer to deploy manually from your local machine:

```bash
npm run deploy
```

This command will:
- Build your Next.js site as a static export
- Create a `.nojekyll` file (required for Next.js on GitHub Pages)
- Push the built files to the `gh-pages` branch

### 2. Enable GitHub Pages

After running the deploy command, you need to enable GitHub Pages in your repository settings:

1. Go to your repository: `https://github.com/cmc1supertech601/dad-construction`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

### 3. Access Your Site

After a few minutes, your site will be live at:

**https://cmc1supertech601.github.io/dad-construction/**

> [!NOTE]
> The first deployment may take 5-10 minutes to become available. Subsequent deployments are usually faster (1-2 minutes).

## Configuration Details

### Next.js Configuration

The site is configured with:
- **Output**: Static export (`output: 'export'`)
- **Base Path**: `/dad-construction` (matches your repository name)
- **Image Optimization**: Disabled (not supported in static exports)

### Deployment Script

The `npm run deploy` script does the following:
```bash
npm run export && touch out/.nojekyll && gh-pages -d out -t true
```

- `npm run export` - Builds the static site
- `touch out/.nojekyll` - Creates a `.nojekyll` file to prevent Jekyll processing
- `gh-pages -d out -t true` - Deploys the `out` directory to the `gh-pages` branch (including dotfiles)

## Updating Your Site

Whenever you make changes to your site:

1. Commit your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. Deploy the updated site:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Site shows 404 error
- Make sure GitHub Pages is enabled in repository settings
- Verify the `gh-pages` branch exists
- Wait a few minutes for GitHub to process the deployment

### Styles or images not loading
- Check that `basePath` in `next.config.ts` matches your repository name
- Ensure all asset paths are relative (not absolute)

### Build fails
- Run `npm run export` locally to check for errors
- Fix any TypeScript or linting errors
- Make sure all dependencies are installed (`npm install`)

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

---

**Repository**: https://github.com/cmc1supertech601/dad-construction
**Live Site**: https://cmc1supertech601.github.io/dad-construction/
