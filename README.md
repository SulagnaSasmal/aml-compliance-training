# AML Compliance Training Program

A scenario-based regulatory training program covering BSA/AML compliance, with a built-in quiz engine and three tailored learning paths for compliance professionals, developers, and operations teams.

## Live Demo

Hosted on GitHub Pages: `sulagnasasmal.github.io/aml-compliance-training/`

## Content Structure

### Modules

| Module | Page | Topic |
|--------|------|-------|
| Index | `index.html` | Program overview and learning path selection |
| AML | `module-aml.html` | Anti-Money Laundering — typologies, red flags, CDD/EDD |
| BSA | `module-bsa.html` | Bank Secrecy Act — reporting requirements, CTRs, SARs |
| OFAC | `module-ofac.html` | OFAC Sanctions — SDN screening, compliance procedures |
| SAR | `module-sar.html` | Suspicious Activity Reports — filing, content, timelines |
| Knowledge Check | `knowledge-check.html` | Scenario-based quiz engine with instant scoring |

### Learning Paths

| Path | Page | Audience |
|------|------|----------|
| Compliance Path | `path-compliance.html` | Compliance officers, AML analysts, BSA officers |
| Developer Path | `path-developer.html` | Engineers building AML / payment systems |
| Operations Path | `path-ops.html` | Operations and onboarding teams |

## Tech Stack

- HTML (87.7%), CSS (10.4%), JavaScript (1.9%)
- No frameworks, no build pipeline
- Scenario-based quiz engine with instant scoring
- Outfit / Inter / JetBrains Mono (Google Fonts)

## Dark / Light Mode

All pages support dark and light themes via a toggle button (◐ / ☀) in the navigation bar. Theme preference persists in `localStorage`. System `prefers-color-scheme` is respected on first visit.

## Status

**Phase 5 — Training & Learning — Complete**

| Area | Status |
|------|--------|
| AML module | Complete |
| BSA module | Complete |
| OFAC module | Complete |
| SAR module | Complete |
| Quiz engine with scenario scoring | Complete |
| Compliance learning path | Complete |
| Developer learning path | Complete |
| Operations learning path | Complete |
| Dark / light theme support | Complete |

## Future Enhancements

- GDPR / data privacy compliance module
- FinCEN beneficial ownership rules module
- Tracked completion with certificates (localStorage-based)
- Printable compliance training certificates
- NICE Actimize platform-specific training module

## Usage

Open `index.html` in any browser, or deploy to GitHub Pages.
