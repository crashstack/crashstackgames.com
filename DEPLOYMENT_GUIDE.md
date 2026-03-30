# GitHub Pages Deployment Guide for Crash Stack Games

This guide will help you deploy your Crash Stack Games website to GitHub Pages with your custom domain.

## Prerequisites

- A GitHub account (you already have this ✓)
- Your custom domain (e.g., `crashstackgames.com`)
- Access to your domain's DNS settings (usually through your domain registrar like GoDaddy, Namecheap, etc.)

## Step 1: Create a New GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Name your repository: `crashstackgames.com` (or use your actual domain name)
4. Make sure it's set to **Public** (required for GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license
6. Click **Create repository**

## Step 2: Upload the Website Files

You have two options:

### Option A: Using Git Command Line (Recommended)

1. Open your terminal/command prompt
2. Navigate to the `CrashStackGames_GitHubPages` folder we prepared
3. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit: Crash Stack Games website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/crashstackgames.com.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Option B: Using GitHub Desktop (Easier)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click **File** → **Clone Repository**
4. Find and clone the repository you just created
5. Copy all files from `CrashStackGames_GitHubPages` into the cloned folder
6. In GitHub Desktop, you'll see all the files listed as "Changes"
7. Click **Commit to main** and add a message like "Initial commit"
8. Click **Push origin** to upload to GitHub

### Option C: Using GitHub Web Interface (Simplest)

1. Go to your new repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop all files from `CrashStackGames_GitHubPages` folder
4. Click **Commit changes**

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon at the top)
3. Scroll down to **Pages** section (on the left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**

GitHub will now build and deploy your site. You should see a message like:
> "Your site is live at https://YOUR_USERNAME.github.io/crashstackgames.com/"

## Step 4: Connect Your Custom Domain

### Step 4a: Update GitHub Pages Settings

1. Still in **Settings** → **Pages**
2. Under "Custom domain", enter your domain name (e.g., `crashstackgames.com`)
3. Click **Save**
4. GitHub will create a `CNAME` file automatically

### Step 4b: Update Your Domain's DNS Settings

Now you need to tell your domain registrar to point to GitHub Pages:

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find the DNS settings for your domain
3. Add these DNS records:

**For the root domain (crashstackgames.com):**
- Type: `A`
- Name: `@` or leave blank
- Value: Point to GitHub's IP addresses:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**For the www subdomain (www.crashstackgames.com):**
- Type: `CNAME`
- Name: `www`
- Value: `YOUR_USERNAME.github.io`

**For your game subdomain (e.g., games.crashstackgames.com):**
- Type: `CNAME`
- Name: `games` (or whatever subdomain you want)
- Value: `YOUR_USERNAME.github.io`

> **Note:** DNS changes can take 24-48 hours to propagate. Be patient!

### Step 4c: Enable HTTPS (Recommended)

1. Go back to **Settings** → **Pages**
2. Check the box for **Enforce HTTPS**
3. Wait a few minutes for the SSL certificate to be issued

## Step 5: Test Your Site

After DNS propagates (usually within a few hours):

1. Visit `https://crashstackgames.com` in your browser
2. You should see your Crash Stack Games website!
3. Test the navigation and visitor counter

## Troubleshooting

### Site shows "404 - Page not found"

- **Wait longer**: DNS can take up to 48 hours to propagate
- **Check CNAME file**: Go to your repository and verify the `CNAME` file exists with your domain name
- **Clear browser cache**: Press `Ctrl+Shift+Delete` and clear your cache

### Blazor pages not loading (shows blank page)

- Make sure the `.nojekyll` file is in your repository root
- Make sure the `404.html` file is in your repository root
- These files tell GitHub Pages how to handle Blazor's routing

### Visitor counter not working

- Open your browser's Developer Tools (F12)
- Check the Console tab for any errors
- Make sure JavaScript is enabled in your browser

## Updating Your Site

Whenever you want to update your website:

1. Make changes to the files in `CrashStackGames_GitHubPages`
2. Upload them to your GitHub repository using one of the methods above
3. GitHub will automatically rebuild and redeploy your site (usually within 1-2 minutes)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Blazor WebAssembly Hosting](https://learn.microsoft.com/en-us/aspnet/core/blazor/host-and-deploy/webassembly)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-pages-site)

## Need Help?

If you encounter any issues:

1. Check the GitHub Pages documentation
2. Review your DNS settings at your domain registrar
3. Make sure all files are uploaded to the repository
4. Verify that `.nojekyll` and `404.html` are present in the root

Good luck with your Crash Stack Games website! 🎮
