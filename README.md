
# ShadowQuest - Electron build repo

This repo contains your HTML/Kaboom game wrapped with Electron and a GitHub Actions workflow
that will build a Windows `.exe` automatically when you push to the `main` branch.

## How to use

1. Create a new GitHub repository (private or public).
2. Upload all files from this folder (or push via git).
3. Make sure `main` branch exists and push to it.
4. Go to the "Actions" tab on GitHub and select the "Build Windows EXE" workflow.
   You can trigger it manually or wait for a push to `main`.
5. When the workflow completes, download the artifact `ShadowQuest-win` from the workflow run — it contains the `.exe` and the app folder.

## Alternatively, build locally

If you prefer to build locally on Windows, run:
```bash
npm install
npx electron-packager . ShadowQuest --platform=win32 --arch=x64 --out=dist --overwrite
```

