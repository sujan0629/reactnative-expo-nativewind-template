# Expo NativeWind Template

A reusable Expo starter with a simple tab app shell and a neutral default setup that does not assume your branding, backend, or Expo account.

## Stack

- Expo SDK 57
- React Native 0.86
- React 19.2
- Expo Router 57
- NativeWind 4.2 with Tailwind CSS 3.4
- TanStack Query v5
- Axios
- Expo Image Picker
- Expo Notifications
- Expo Development Client
- React Native Toast Message
- React Native SVG Transformer

NativeWind v5 is still a prerelease, so this production template stays on the latest stable NativeWind v4 and its supported Tailwind CSS v3 line.

## Requirements

- Node.js 22.13 or newer
- npm 11
- Android 7 or newer
- iOS 16.4 or newer
- Xcode 26.4 or newer for local iOS builds

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `cmd /c` if script execution is blocked:

```powershell
cmd /c npm install
cmd /c copy .env.example .env
cmd /c npm run dev
```

Run the local static checks with:

```bash
npm run check
npx expo-doctor@latest
```

The `development` EAS profile uses `expo-dev-client`. Rebuild the development client after changing the Expo SDK or any native dependency.

## Template Defaults

- The app opens into `/(tabs)/home` after a short loading state in `app/index.tsx`.
- The project does not include authentication or persisted session handling by default.
- `app.json` does not include an EAS project ID or OTA updates URL.
- No app icons or splash assets are wired by default.

## Environment

Create a `.env` file from `.env.example` and set:

```bash
EXPO_PUBLIC_API_URL=https://api.example.com
```

The shared Axios client in `api/axios.ts` fails fast when `EXPO_PUBLIC_API_URL` is missing, so fresh clones do not silently call a fake placeholder backend.

## Project Structure

```text
app/
  _layout.tsx
  index.tsx
  +not-found.tsx
  (tabs)/
    _layout.tsx
    home.tsx
    explore.tsx
    notifications.tsx
    profile.tsx
api/
  axios.ts
components/
lib/
assets/
global.css
tailwind.config.js
babel.config.js
metro.config.js
app.json
eas.json
```

## Customize Before Shipping

- Update the app identity fields in `app.json`.
- Replace the default color palette in `tailwind.config.js`.
- Add your own icons and splash assets, then reference them in `app.json`.
- Expand `api/axios.ts` with auth headers, interceptors, or other API behavior if your app needs them.
- Run `eas init` when you are ready to connect the app to your own Expo account and project.

## Notes

- `expo-router`, `nativewind`, and the SVG transformer are already configured.
- Reanimated and Worklets are pinned to the Expo SDK 57-compatible versions required by NativeWind.
- TanStack Query is wired at the app root so you can add server-state hooks without more setup.
- Toast support is already mounted in the root layout.
