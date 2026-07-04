# FreeVideo.in Astro Project

Updated UI flow:

1. Paste a public video URL.
2. Choose format: MP4 or MP3.
3. Choose quality first: 240p, 360p, 480p, 720p, 1080p, 1440p / 2K, 2160p / 4K, or 4320p / 8K.
4. Click **Analyze Video**.
5. The site shows video thumbnail, title, duration, platform, and selected quality.
6. Click **Download Now**.
7. The backend prepares the file and the browser download starts automatically.

## Run frontend

```bash
npm install
npm run dev
```

Frontend URL:

```txt
http://localhost:4321
```

## Run backend

```bash
cd backend
npm install
npm run dev
```

Backend URL:

```txt
http://localhost:5000
```

## Frontend .env

Create `.env` in the main project folder:

```env
PUBLIC_API_BASE_URL=http://localhost:5000
```

## Backend .env

Create `backend/.env` from `backend/.env.example`.

## Important

This working ZIP uses the backend included in this project. Keep backend running before testing Analyze Video or Download Now.

## Language packs added

Language selector was removed from the visible website. Translation files can be kept for later if needed:

- English
- Hindi
- Spanish
- French
- German
- Portuguese
- Indonesian

Files added:

```text
src/i18n/ui.js
src/i18n/utils.js
src/components/LanguageSwitcher.astro
```

The visible language selector is removed. Add it back later only if you want multilingual URLs or a frontend language switcher:

```text
/?lang=hi
/youtube-video-downloader/?lang=es
```

To add more translated words, edit:

```text
src/i18n/ui.js
```

Add `data-i18n="translation.key"` to any element you want to translate, or `data-i18n-placeholder="translation.key"` for input placeholders.

## Thumbnail preview fix

The preview card now hides broken thumbnail images and shows a clean placeholder when the backend cannot return a thumbnail or the image URL fails to load.

## Latest update

- Added longer Terms and Conditions page for responsible use, unsupported content, copyright complaints, disclaimers, no affiliation and contact email.
- Added longer Privacy Policy page covering URL processing, video metadata, file-size display, temporary files, logs, Cloudflare/hosting notes and contact email.
- Added Contact page with dummy email only. Replace `support@freevideo.in` and `copyright@freevideo.in` in `src/data/site.js` before production.
- `/api/info` now returns selected file size where available: `fileSize`, `fileSizeBytes`, and `fileSizeEstimated`.
- Video preview now shows duration and selected file size in MB/GB after Analyze Video.

## MP4 vs MP3 selection update

- MP4 format shows video resolution options: 240p, 360p, 480p, 720p, 1080p, 2K, 4K, and 8K.
- MP3 format now hides video resolution options because audio does not need pixels/resolution.
- MP3 format shows audio bitrate options instead: 128 kbps, 192 kbps, 256 kbps, and 320 kbps.
- After Analyze Video, the UI shows estimated size for each MP4 resolution and each MP3 bitrate.
