# Contents
- [References](#references)
  * [Error Handling](#error-handling)
- [Authorization](#authorization)
  * [User Registeration](#user-registeration)
  * [User log in](#user-log-in)
- [User](#user)
  * [User object](#user-object)

# References

## Error Handling

A successful request should contain `success: true` in the response field.

When a request is errored, the server will send back HTTP status codes as well as English error messages. The error messages are for references and the client should display errors according to the status codes.

# Authorization

## User Registeration
**POST** /auth/register

| Parameter      | Param type | Required |
| :------------- | :--------- | :------- |
| `username`     | `String`   | Yes      |
| `password`     | `String`   | Yes      |

Registers a new account.
On success, the server will return the user ID of the user.

The client should then log in with the same password and retrieve a session token.

If registeration is disabled then 403 is returned.

## User log in
**POST** /auth/register

| Parameter      | Param type | Required |
| :------------- | :--------- | :------- |
| `username`     | `String`   | Yes      |
| `password`     | `String`   | Yes      |

Example response
```json
{
    "session": "sometokenhtiwrhtoiwnroiw",
    "expiresIn": 42069 //This field is only returned if sessions are configured to expire
}
```

# User

## User object
The user object describes the information of a user profile.
| Key           | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| username      | `String` | The name of a user, editable at any time. |
| displayname   | `String` | The display name of a user.               |
| description   | `String` | The description set by a user.            |
| id            | `String` | The ULID of the user. Not changeable.     |
| role          | `Role[]`  | A list of roles given to the user.        |

