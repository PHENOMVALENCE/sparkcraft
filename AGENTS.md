# Codex Repository Instructions

## Repository workflow

This repository uses a protected human-reviewed Git workflow.

The primary branch is:

`main`

The permanent Codex branch is:

`codex/master-changes`

Codex must never commit or push directly to `main`.

Codex must never merge its own pull request.

All Codex changes must be submitted through:

`codex/master-changes` → `main`

## Before starting work

Before making changes:

1. Confirm the current directory is the correct Git repository.
2. Run `git status`.
3. Confirm there are no unresolved merge conflicts.
4. Fetch the latest remote branches using `git fetch origin --prune`.
5. Confirm that `origin/main` exists.
6. Create or switch to `codex/master-changes`.
7. Bring the latest `origin/main` changes into the Codex branch without force-pushing.
8. Stop if the operation would overwrite uncommitted human work.

Never use:

- `git push --force`
- `git push --force-with-lease`
- `git reset --hard`
- `git clean -fd`
- destructive rebases
- direct pushes to `main`

## Permitted work

Codex may:

- inspect the repository;
- review recent code changes;
- implement explicitly requested features;
- fix clearly reproducible defects;
- update technical documentation;
- update README files;
- document installation and setup procedures;
- document architecture and directory structure;
- document API endpoints;
- document environment variables without exposing their values;
- document development and deployment procedures;
- add or improve tests;
- run linting, tests, type checks, and builds;
- create commits on `codex/master-changes`;
- push `codex/master-changes`;
- create or update a draft pull request targeting `main`.

## Documentation requirements

Documentation is a mandatory part of every meaningful change.

After reviewing or changing the repository, check whether the following are accurate:

- project overview;
- installation instructions;
- local development instructions;
- technology stack;
- environment variable descriptions;
- database setup;
- folder structure;
- available scripts and commands;
- testing instructions;
- build instructions;
- deployment instructions;
- API documentation;
- implemented features;
- known limitations;
- recent architectural changes.

Update documentation only when the repository provides sufficient evidence.

Do not invent:

- commands;
- credentials;
- environment variables;
- endpoints;
- features;
- deployment procedures;
- configuration values.

When implementation details cannot be verified, document the issue as requiring human confirmation.

## Documentation files

Prefer maintaining:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/SETUP.md`
- `docs/DEPLOYMENT.md`
- `docs/API.md`
- `docs/CHANGELOG.md`

Do not create all files unnecessarily. Only create files that provide meaningful value for the repository.

## Commit style

Use Conventional Commits.

Required format:

`type: short description`

Allowed types:

- `feat`
- `fix`
- `docs`
- `refactor`
- `test`
- `chore`
- `style`
- `perf`
- `build`
- `ci`

Examples:

- `feat: add payment history`
- `fix: navbar overflow`
- `docs: update deployment guide`
- `refactor: simplify authentication`
- `test: add login validation`
- `chore: update dependencies`

Commit rules:

- Use lowercase.
- Keep the description short.
- Use the imperative form.
- Do not use quotation marks.
- Do not end with a period.
- Keep the subject under 60 characters when practical.
- Each commit should represent one logical change.
- Do not combine unrelated changes into one commit.
- Do not create empty commits.
- Do not commit generated dependencies such as `node_modules`.
- Do not commit build output unless the repository intentionally tracks it.

## Validation

Before committing, detect the project stack and run the applicable checks.

For JavaScript, TypeScript, React, Astro, or Next.js projects, inspect `package.json` and run relevant commands such as:

- `npm run lint`
- `npm test`
- `npm run typecheck`
- `npm run build`

For PHP or Laravel projects, run relevant commands such as:

- PHP syntax checks;
- `composer validate`;
- `composer test`;
- `php artisan test`;
- project-specific validation commands.

Do not assume a command exists. Inspect the repository first.

If required validation fails:

1. Investigate the failure.
2. Fix it only when the correction is within the requested scope.
3. Do not claim that checks passed when they did not.
4. Record unresolved failures in the pull request.
5. Avoid committing changes known to break the application.

## Sensitive information

Never expose, modify, stage, or commit:

- `.env`;
- `.env.*`;
- API keys;
- passwords;
- access tokens;
- refresh tokens;
- private keys;
- certificates;
- database dumps;
- customer data;
- user credentials;
- production secrets;
- SSH credentials;
- hosting credentials.

Codex may document the name of an environment variable, but never its actual value.

## Pull requests

After creating verified commits:

1. Push only `codex/master-changes`.
2. Check whether an open pull request already exists from `codex/master-changes` to `main`.
3. If one exists, update that branch and pull request.
4. If none exists, create a draft pull request.
5. Never merge the pull request.

The pull request title should use Conventional Commit style where practical.

Example:

`docs: synchronize project documentation`

The pull request description must include:

## Summary

A concise explanation of the work completed.

## Changes

A list of meaningful changes.

## Documentation

Documentation created or updated.

## Validation

Commands executed and their results.

## Risks

Potential regressions, limitations, or uncertain areas.

## Human review

Specific files or decisions that require human confirmation.

## Prohibited actions

Codex must never:

- merge a pull request;
- approve its own pull request;
- push directly to `main`;
- deploy to production;
- modify GitHub repository settings;
- alter branch protection;
- delete remote branches;
- force-push;
- expose credentials;
- run destructive database operations;
- rewrite published history;
- make broad unrelated changes;
- change hosting configuration without explicit instructions.
