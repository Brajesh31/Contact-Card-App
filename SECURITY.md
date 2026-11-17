# 🔐 Security Policy

## Supported versions
This repository currently maintains the default branch, `main`. No formal release or backport policy is published.

## Reporting a vulnerability
Do not publish exploitable details, credentials, personal contact data, or attack payloads in a public issue. Contact the repository owner through the private contact options on the GitHub profile and include:
- A concise description and impact.
- Reproduction steps that avoid real user data.
- Affected commit or file.
- Suggested mitigation, if known.

## Response
The maintainer will review the report, assess impact, and coordinate a fix or mitigation. No response-time SLA is currently promised.

## Security expectations
- Never commit tokens, passwords, or real contact records.
- Keep npm dependencies reviewed and updated.
- Validate user-controlled values before using them in new integrations.
- Avoid logging entered contact details.
- Treat any future persistence or synchronization feature as a privacy-sensitive change.

## Current security boundary
The inspected application is a client-side React app. Its contact list lives in React memory and is not backed by authentication, a server, or a database. Do not interpret this as a security audit or a guarantee about the hosting environment.
