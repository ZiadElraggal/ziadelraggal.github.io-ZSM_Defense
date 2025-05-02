#!/bin/bash

# Build the Nuxt.js application
npx nuxt generate

# Navigate to the dist directory
cd dist

# Initialize a new git repository
git init

# Add your remote GitHub repository
git remote add origin https://github.com/ZiadElraggal/ziadelraggal.github.io-ZSM_Defense

# Check out to the target branch
git checkout -B main

# Add all generated files including .mp4s
git add -A

# Commit
git commit -m "Deploying to GitHub Pages"

# Force push to the main branch
git push -f origin main

# Navigate back to the root
cd ..

# Remove the dist directory (optional)
rm -rf dist