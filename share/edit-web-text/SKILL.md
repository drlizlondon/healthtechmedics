---
name: edit-web-text
description: Use when a user wants a local-only visual editing mode for website copy, with all visible content moved into a single structured content file and inline editing available only in development. Best for React or frontend projects where the design should remain unchanged while copy becomes directly editable on the page, with local save-to-file support when practical.
---

# Edit Web Text

Use this skill when a user wants to edit website copy directly in a local preview instead of searching through source files manually.

## Goal

Implement a clean, developer-friendly visual editing workflow that:
- centralises visible copy into one content source
- enables inline editing in local development
- keeps production builds non-editable
- preserves the existing design and layout
- supports saving edits back into the local content file when practical

## Default approach

1. Inspect the project structure first.
2. Identify where visible copy currently lives.
3. Create a single structured content source, usually `src/content/siteContent.ts`.
4. Replace hardcoded copy across the site with references to that content source.
5. Add a reusable inline editing component such as `EditableText`.
6. Add a development-only content provider to manage draft edits.
7. Add a local-only Edit Mode toggle that is hidden in production.
8. Prefer a `Save to content file` action for local development when the dev server can safely write to the content file.
9. Also keep a `Copy updated content JSON` action as a fallback.
10. Run build and lint checks and fix issues introduced by the refactor.

## Requirements to preserve

- Do not redesign the site unless the user explicitly asks.
- Keep spacing, typography, colour, layout and brand feel unchanged.
- Keep editing controls out of production builds.
- Prefer simple, robust patterns over elaborate CMS-style behaviour.

## Recommended architecture

### Content source

Prefer a single file such as:
- `src/content/siteContent.ts`
- `src/content/siteContent.json`

Use a nested structure grouped by page and shared UI areas, for example:
- `common`
- `navigation`
- `footer`
- `home`
- `services`
- `about`
- `contact`

Add a comment near the export explaining that local Edit Mode can save directly back to this file when supported, and can also export JSON manually as a fallback.

### Edit mode provider

Use a provider or context to manage:
- current content state
- whether edit mode is enabled
- whether the app is running in development
- content updates by path
- copying JSON to clipboard
- saving content back into the local content file when supported
- resetting the local draft

Useful behaviours:
- gate edit mode behind `import.meta.env.DEV`
- optionally persist draft content in `localStorage`
- expose helpers like `updateContentAtPath(path, value)`
- expose `saveContentToFile()` if the local dev setup supports it
- expose `resetDraftContent()` to clear the browser draft and restore source content

### Editable text component

Create a reusable component such as `EditableText` that:
- reads values from the content object by path
- renders normal text outside edit mode
- becomes `contentEditable` or controlled input text in edit mode
- applies a subtle outline or highlight when editable
- supports both single-line and multi-line text

Use it for:
- headings
- paragraphs
- navigation labels
- button labels
- card titles and descriptions
- small UI copy blocks

When edit mode is enabled, prevent navigation on editable links and CTA buttons where needed.

### Edit UI

Add a small floating panel in development only with:
- an `Edit Mode` toggle
- a `Save to content file` button when local file writing is supported
- a `Copy updated content JSON` button as backup
- a `Reset local draft` button
- a short note explaining where the content file lives

Do not render this panel in production.

### Local save-to-file pattern

When the project is running locally and direct file writing is practical, prefer a dev-only save route.

Typical approach:
- add a development-only dev-server endpoint such as `/__save-site-content`
- send the current content JSON to that endpoint from the browser
- have the dev server write the structured content back into `src/content/siteContent.ts`
- keep this route development-only and never expose it in production

If direct file writing is not practical in the current stack, clipboard export remains the fallback.

## Production safety rules

Make sure the public site does not expose editing features.

Prefer these rules:
- no edit panel in production
- no editable DOM in production
- no editing state visible unless in development
- no public save-to-file endpoint in production
- no reliance on browser file system access for normal use

## Implementation guidance

- Refactor carefully and preserve the existing class names and component structure where possible.
- Start with shared areas like navigation and footer, then move through each page.
- If components currently accept strings, widen them to accept `ReactNode` when needed.
- Keep the content schema readable and stable so non-technical users can update it later.
- Add concise comments only where future maintainers need orientation.
- If using a dev-only save endpoint, keep the file generation format clean and deterministic.

## Validation checklist

Before finishing:
- confirm all major visible copy comes from the content file
- confirm edit mode appears locally in development
- confirm text is actually editable inline
- confirm `Save to content file` works if implemented
- confirm `Copy updated content JSON` still works as fallback
- confirm `Reset local draft` works
- confirm production build hides edit mode
- run build
- run lint

## Good user-facing summary

When done, tell the user:
- where the central content file lives
- where the edit mode code lives
- how to use Edit Mode locally
- whether local edits auto-save as a browser draft
- whether `Save to content file` is available
- how to use `Copy updated content JSON` as fallback
- whether build and lint passed
