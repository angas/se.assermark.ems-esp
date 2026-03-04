# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Homey Pro app that integrates with EMS-ESP (open-source boiler/heat pump controller) over HTTP/REST. SDK version 3, requires Homey 5.0.0+.

## Build & Development Commands

```bash
npm run build          # Compile TypeScript (tsc) → output to .homeybuild/
npm run lint           # ESLint with Athom config
homey app run          # Run app on local Homey device
```

No test framework is configured.

## Architecture

**Entry point:** `app.ts` (minimal, just extends `Homey.App`)

**Two drivers**, each with a `driver.ts` (flow card registration) and `device.ts` (polling + capability management):
- `drivers/boiler/` — Class `heater`. Read-only capabilities: flow/return temps, brine temps, pump/compressor speeds, tap water temp, error codes.
- `drivers/thermostat/` — Class `thermostat`. Read-only: current temp, outdoor temp, heat pump state. Writable: `target_temperature`.

**Core library (`lib/`):**
- `ems-esp-client.ts` — HTTP client with Bearer token auth and Mutex-serialized requests (5s timeout).
- `types.ts` — TypeScript types for EMS-ESP API responses (`ThermostatData`, `BoilerData`).
- `utils.ts` — `polling()` creates infinite poll loops; `setCapabilityValues()` batches capability updates; `throttling()` prevents duplicate flow triggers.
- `error-codes.ts` — Boiler error code → Swedish description mapping.

**Homey Compose (source of truth for app.json):**
- `/.homeycompose/app.json` — App metadata (do NOT edit `/app.json` directly)
- `/.homeycompose/capabilities/` — Custom capability definitions (prefixed `boiler_*`, `thermostat_*`)
- `/.homeycompose/flow/` — Flow condition card definitions

## Key Patterns

**Polling:** Devices poll EMS-ESP at a configurable interval. On error, the device is marked unavailable and retries at doubled interval. Cleanup via `stopPolling()` on device deletion.

**Capability writes (thermostat):** Stop polling → send command → wait → restart polling, to avoid race conditions.

**Device settings:** `network_address` (default `ems-esp.local`), `access_token`, `poll_interval`.

**Locales:** English (`en.json`), Swedish (`sv.json`), Slovak (`sk.json`).

## Git commits
- Write concise, single-line commit messages
- Use conventional commit format: type: short description
- Do not add extra blank lines or body text unless explicitly asked
- Do not mention Claude, AI, or any tooling in commit messages
