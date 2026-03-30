# Quick Start: Deploy to GitHub Pages in 5 Minutes

## The Super Quick Version

### 1. Create a GitHub Repository
- Go to GitHub.com → Click **+** → **New repository**
- Name it: `crashstackgames.com` (use your actual domain)
- Set to **Public**
- Click **Create repository**

### 2. Upload Files (Pick ONE method)

**Method A: GitHub Web Upload (Easiest)**
- Click **Add file** → **Upload files**
- Drag and drop everything from this folder
- Click **Commit changes**

**Method B: GitHub Desktop**
- Download GitHub Desktop
- Clone your repository
- Copy all files into the cloned folder
- Commit and Push

**Method C: Git Command Line**
```bash
cd CrashStackGames_GitHubPages
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/crashstackgames.com.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to your repository **Settings**
- Scroll to **Pages** section
- Select **main** branch, **/ (root)** folder
- Click **Save**

### 4. Connect Your Domain
- In **Pages** settings, enter your domain name in "Custom domain"
- Click **Save**
- Log into your domain registrar (GoDaddy, Namecheap, etc.)
- Add these DNS **A records** pointing to:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add a **CNAME record** for `www` pointing to `YOUR_USERNAME.github.io`

### 5. Wait & Test
- Wait 24-48 hours for DNS to propagate
- Visit your domain in a browser
- Done! 🎉

## Important Files in This Folder

- **index.html** - Main page (don't delete!)
- **.nojekyll** - Tells GitHub to handle Blazor routing (don't delete!)
- **404.html** - Handles page routing for Blazor (don't delete!)
- **css/** - Stylesheets
- **js/** - JavaScript files including visitor counter
- **images/** - Your game images
- **DEPLOYMENT_GUIDE.md** - Full detailed guide with troubleshooting

## Common Issues

| Problem | Solution |
|---------|----------|
| Site shows 404 | Wait 24-48 hours for DNS to propagate |
| Blank page | Make sure `.nojekyll` and `404.html` are uploaded |
| Visitor counter doesn't work | Check browser console (F12) for errors |
| Domain not working | Verify DNS records at your registrar |

## Need the Full Guide?

See **DEPLOYMENT_GUIDE.md** for detailed instructions with screenshots and troubleshooting.

Good luck! 🚀
