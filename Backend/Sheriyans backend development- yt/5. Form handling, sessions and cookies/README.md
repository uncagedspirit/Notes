## Session

A session is a way to store user data temporarily on the server while they interact with a web application. 
It allows data to persist across multiple requests from the same user.

#### How sessions work?
- A user logs in or performs an action.
- A unique session ID is generated and stored on the server.
- The session ID is sent to the client (usually via cookies).
- On subsequent requests, the session ID is sent back, allowing the server to retrieve the stored session data.

  

## Cookies

A cookie is a small piece of data stored in the user's browser by a website. 
It helps track user sessions, preferences, and authentication status across multiple requests.

#### How cookies work?
- The server sends a Set-Cookie header in the HTTP response.
- The browser stores the cookie.
- On subsequent requests, the browser automatically sends the cookie to the server.
- The server can read the cookie data to maintain user state.

#### Types of cookies

| Types of Cookies   | Description                                               |
|--------------------|-----------------------------------------------------------|
| Session Cookies    | Temporary, deleted when the browser is closed.            |
| Persistent Cookies | Stored for a specific duration (expires after some time). |
| Secure Cookies     | Only sent over HTTPS for security.                        |
| HttpOnly Cookies   | Cannot be accessed via JavaScript (prevents XSS attacks). |


