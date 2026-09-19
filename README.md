# CampusEats Task Tracker

A small task-tracking repository for the **CampusEats** project, created for
SE3090 - Software Engineering Frameworks, Lab Practical 08
(Git, Collaborative Development, CI/CD, Security & Code Quality).

## Purpose

The repository content is deliberately light. It exists so the team can practise
the delivery workflow a real team uses:

`branch -> commit -> pull request -> review -> merge`

with GitHub Issues for planning and GitHub Actions checking every change.

## Project structure

```
campuseats-task-tracker/
  README.md                  # project overview
  .gitignore                 # ignored files (node_modules, bin, obj)
  package.json               # project manifest (used by npm audit)
  src/
    tasks.js                 # sample source file
  .github/
    workflows/
      ci.yml                 # the CI pipeline
```

## Running locally

```bash
npm test          # runs src/tasks.js
npm audit         # checks dependencies for known vulnerabilities
```

## Branching strategy

This repository follows **GitHub Flow**: `main` is always deployable and every
change is made on a short-lived branch that is merged back through a reviewed
pull request.

| Branch prefix | Used for            | Example                    |
|---------------|---------------------|----------------------------|
| `feature/`    | new functionality   | `feature/add-task-list`    |
| `fix/`        | bug fixes           | `fix/readme-typo`          |
| `chore/`      | tooling / CI / config | `chore/add-ci`           |

Commit messages follow **Conventional Commits** (`feat:`, `fix:`, `chore:`).

## Security

Secrets (API keys, passwords, tokens) are **never** committed to this
repository. They are supplied at run time through environment variables, for
example `process.env.API_KEY`.
