# PSS Cambodia Website - Production Deployment Guide

This guide provides comprehensive instructions for the DevOps team to build, test, and deploy the PSS Cambodia Website to production.

## Table of Contents

- [System Requirements](#system-requirements)
- [Environment Setup](#environment-setup)
- [Build Process](#build-process)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Rollback Procedures](#rollback-procedures)

---

## System Requirements

### Node.js Version

- **Required**: Node.js `^20.19.0` or `>=22.12.0`
- **Verify installed version**:
  ```bash
  node --version
  npm --version
  ```

### Package Manager

- npm 10.x or higher

### System Dependencies

- Git (for version control and GitHub Pages deployment)
- Sufficient disk space for node_modules (~1GB)

---

## Environment Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd pss_cambodia_website

# Install dependencies
npm install
```

### 2. Verify Installation

```bash
npm run dev
```

The development server will start at `http://localhost:5173` (or the next available port).

---

## Build Process

### Production Build

```bash
npm run build
```

**Output**:

- All compiled files are generated in the `dist/` directory
- Assets are optimized and minified
- Base path is configured to `/pss_cambodia_website/` for GitHub Pages

**Build artifacts include**:

- HTML entry point: `dist/index.html`
- JavaScript bundles: `dist/assets/*.js`
- CSS bundles: `dist/assets/*.css`
- Static assets: `dist/assets/images/*`, `dist/assets/doc/*`

### Build Verification

After building, preview the production build locally:

```bash
npm run preview
```

Visit `http://localhost:4173` to verify the build works correctly.

---

## Testing

### Run Unit Tests

```bash
npm run test:unit
```

**Test Framework**: Vitest v3.2.4

### Run Tests with Coverage

```bash
npm run test:unit -- --coverage
```

### Best Practices

- Always run tests before deploying to production
- Monitor test coverage trends
- Fix any failed tests before proceeding with deployment

---

## Deployment

### Prerequisites

- GitHub account with push access to the repository
- `gh-pages` package is included in devDependencies
- Repository has GitHub Pages enabled (Settings → Pages → Deploy from a branch)
- Branch set to `gh-pages` for serving

### Automated Deployment Process

The deployment process is automated through npm scripts:

```bash
npm run deploy
```

**What this command does**:

1. Runs `predeploy` hook which executes `npm run build`
2. Compiles and optimizes the application for production
3. Runs `gh-pages -d dist` to deploy the `dist/` directory to GitHub Pages

### Step-by-Step Deployment

```bash
# 1. Ensure you're on the main/master branch
git checkout main

# 2. Pull the latest changes
git pull origin main

# 3. Install latest dependencies
npm install

# 4. Run tests to verify code quality
npm run test:unit

# 5. Build the production bundle
npm run build

# 6. Preview the build (optional but recommended)
npm run preview

# 7. Deploy to GitHub Pages
npm run deploy
```

### Deployment Verification

After deployment (typically takes 30 seconds to 2 minutes):

1. Visit: `https://<username>.github.io/pss_cambodia_website/`
2. Verify page loads correctly
3. Check all language versions (English, French, Khmer)
4. Test responsive design across devices
5. Verify images and assets load properly

**Note**: GitHub Pages caches are typically cleared within a few minutes. If you don't see changes, wait 5-10 minutes and hard refresh (Ctrl+Shift+R or Cmd+Shift+R).

---

## Technology Stack

| Technology  | Version | Purpose                           |
| ----------- | ------- | --------------------------------- |
| Vue.js      | 3.5.18  | Frontend framework                |
| Vite        | 7.0.6   | Build tool and dev server         |
| Vue Router  | 4.5.1   | Client-side routing               |
| Pinia       | 3.0.3   | State management                  |
| Vue-i18n    | 11.4.0  | Internationalization (EN, FR, KH) |
| TailwindCSS | 4.2.4   | CSS framework                     |
| GSAP        | 3.15.0  | Animation library                 |
| Vitest      | 3.2.4   | Unit testing framework            |

---

## Project Structure

```
pss_cambodia_website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable Vue components
│   │   ├── about/         # About page components
│   │   ├── common/        # Navigation, Footer
│   │   └── home/          # Homepage components
│   ├── views/             # Page views
│   ├── router/            # Vue Router configuration
│   ├── stores/            # Pinia store (state management)
│   ├── i18n/              # Internationalization files
│   │   ├── en.json
│   │   ├── fr.json
│   │   └── kh.json
│   ├── assets/            # CSS, images, documents
│   └── App.vue            # Root component
├── dist/                  # Production build output (generated)
├── vite.config.js         # Vite configuration
├── vitest.config.js       # Vitest configuration
└── package.json           # Dependencies and scripts
```

---

## Environment Configuration

### Vite Base Path

The application is configured with `base: '/pss_cambodia_website/'` in `vite.config.js` for GitHub Pages project repository deployment.

**Important**: Do NOT modify this without understanding the impact on asset loading and routing.

### Build Output

- **Configuration**: `vite.config.js`
- **Plugins**: Vue 3, Vue DevTools, TailwindCSS
- **Resolution alias**: `@/` points to `./src/`

---

## Troubleshooting

### Common Issues

#### Issue: `npm install` fails

**Solution**:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

#### Issue: Build fails with module not found

**Solution**:

```bash
# Verify Node version is correct
node --version  # Should be ^20.19.0 or >=22.12.0

# Reinstall dependencies
npm install
```

#### Issue: Deployment fails with "gh-pages" error

**Solution**:

```bash
# Ensure git is configured
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# Try deployment again
npm run deploy
```

#### Issue: Changes not visible after deployment

**Solution**:

1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait 5-10 minutes for GitHub's cache to clear
4. Verify deployment succeeded by checking GitHub Pages settings

#### Issue: CSS or images not loading

**Possible causes**:

- Incorrect `base` path in vite.config.js
- Assets not in public/ or src/assets/ directories
- Check browser console for 404 errors

---

## Rollback Procedures

### Rollback to Previous GitHub Pages Deployment

GitHub Pages deployments are pushed to the `gh-pages` branch. To rollback:

```bash
# 1. View the git log for gh-pages branch
git log --oneline gh-pages

# 2. Reset gh-pages to a previous commit
git checkout gh-pages
git reset --hard <commit-hash>
git push origin gh-pages --force

# 3. Verify rollback in GitHub Pages settings
# Visit: https://github.com/<username>/<repo>/deployments
```

### Rollback Using Local Backup

If you have a backed-up `dist/` folder:

```bash
# 1. Replace current dist/ with backup
cp -r backup_dist/* dist/

# 2. Deploy again
npm run deploy
```

---

## Deployment Checklist

Before deploying to production:

- [ ] Node.js version verified (`^20.19.0` or `>=22.12.0`)
- [ ] All dependencies installed: `npm install`
- [ ] Tests passing: `npm run test:unit`
- [ ] Build successful: `npm run build` (no errors)
- [ ] Preview tested locally: `npm run preview`
- [ ] Git repository is clean (no uncommitted changes)
- [ ] Logged into GitHub with proper credentials
- [ ] GitHub Pages enabled and configured in repository
- [ ] Base path matches repository name: `/pss_cambodia_website/`
- [ ] Team notified of deployment
- [ ] Backup of previous `dist/` created (optional but recommended)

---

## Monitoring and Maintenance

### Post-Deployment Checks

- [ ] Website loads without errors
- [ ] All pages are accessible
- [ ] Language switching works (EN, FR, KH)
- [ ] Images and static assets load correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No 404 errors in browser console
- [ ] Performance acceptable (check Network tab)

### Regular Maintenance

- Keep Node.js and npm updated within supported versions
- Review and update dependencies periodically: `npm outdated`
- Monitor build times and file sizes
- Archive old deployments periodically

---

## Support and Documentation

- **Vite Documentation**: https://vite.dev/
- **Vue 3 Documentation**: https://vuejs.org/
- **GitHub Pages**: https://pages.github.com/
- **Vitest Documentation**: https://vitest.dev/

---

## Version History

| Version | Date       | Notes                    |
| ------- | ---------- | ------------------------ |
| 1.0     | 2026-05-15 | Initial deployment guide |

---

**Last Updated**: 2026-05-15  
**Maintainer**: DevOps Team
