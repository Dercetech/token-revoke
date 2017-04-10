# token-revoke
The token-revoke plugin is designed to fit **Trapezo-express** and add a capability that most open-source token-based authentication libraries are missing: revocation.

**Trapezo-Express** is the project stub proposed by [Jérémie Mercier (Jem)](https://www.linkedin.com/in/jeremiemercier/) implementing the seamless [Trapezo](https://github.com/Dercetech/trapezo) dependency injection framework for Node.js. [Follow Jem's projects on twitter](https://twitter.com/dercetech).

## Background
- User deletion, rights updates and fraud prevention algorithms might need to force a user to re-authenticate.
- Token-based is praised for being stateless and highly suitable for cloud apps.
- Token-based has the downside of not allowing easy session voiding.

## Principle
- Upon authentication, the cached list of revokes is reloaded.
- Upon decrypting a token, revocation is evaluated.
- Revocation applies to a given user and tokens issued until a certain date.
- Revocation database is cleaned on a regular basis, dropping revokes older than (issue date) + (token longevity)

## Current state
On hold due to development bandwidth limitation.

## Version history
- v0.0.x : Not yet working. Hang in there.
