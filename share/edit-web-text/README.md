# edit-web-text

A Codex skill for adding local-only inline copy editing to React or Vite websites without exposing editing tools in production.

## What it does

- moves visible website copy into a single structured content file
- adds a dev-only Edit Mode toggle
- lets you click and edit visible text inline
- supports local draft persistence in the browser
- supports saving edits back to the content file when practical
- keeps production builds non-editable

## Good fit

This is useful for:
- React sites
- Vite sites
- marketing websites
- consultancy or studio sites
- projects where non-technical copy editing matters

## Main workflow

1. Centralise visible copy into `src/content/siteContent.ts` or a similar file.
2. Replace hardcoded UI copy with content references.
3. Add an inline `EditableText` component.
4. Add a dev-only Edit Mode panel.
5. Prefer `Save to content file` locally.
6. Keep `Copy updated content JSON` as fallback.
7. Hide all editing controls in production.

## Design goals

- no CMS required
- minimal disruption to existing layout
- production-safe
- easy to reuse across projects

## Included files

- [SKILL.md](./SKILL.md): the Codex skill definition

## Example prompt

```text
Use the edit-web-text skill on this website.

I want a local-only visual editing mode so I can click text directly on the page and edit copy inline during development. Keep the current design unchanged, move visible copy into a single structured content file, hide all editing controls in production, and support saving changes back into the content file.
```
