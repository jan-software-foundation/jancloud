# Contents
- [References](#references)
  * [Error Handling](#error-handling)
    + [Example Error response](#example-error-response)
- [Authorization](#authorization)
  * [User Registeration](#user-registeration)
    + [**`POST`** `/auth/register`](#---post------auth-register-)
  * [User log in](#user-log-in)
    + [**`POST`** `/auth/login`](#---post------auth-login-)
  * [User log out](#user-log-out)
    + [**`POST`** `/auth/logout`](#---post------auth-logout-)
- [User](#user)
  * [User object](#user-object)
  * [Fetch user profile](#fetch-user-profile)
    + [**`GET`** `/users/:USER.ID`](#---get------users--userid-)
  * [Update user profile](#update-user-profile)
    + [**`PATCH`** `/users/:USER.ID`](#---patch------users--userid-)
# References
## Error Handling

If the request was successful, the server will return HTTP status code ranged from 200-399.

When a request is errored, the server should send back HTTP status codes from 400 to 599, as well as error messages(not localized).
### Example Error response
```json
{
    "error": true,
    "status": 500,
    "description": "Internal server error"
}
```

The error messages are for references only and the client should display errors according to the status codes.

# Authorization

## User Registeration
### **`POST`** `/auth/register`

| Parameter      | Param type | Required |
| :------------- | :--------- | :------- |
| `username`     | `String`   | Yes      |
| `password`     | `String`   | Yes      |

Registers a new account.
On success, the server will return the user ID of the user in the `userID` field.
The client should then log in with the same password and retrieve a session token.

> If registeration is disabled on the server, 403 Forbidden will be returned.

----

## User log in
### **`POST`** `/auth/login`

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
----
## User log out
### **`POST`** `/auth/logout`
Invalidates the session token used to make the request.
# User

## User object
The user object describes the information of a user profile.
| Key           | Type     | Description                                  |
| :------------ | :------- | :------------------------------------------- |
| username      | `String` | The name of a user.                          |
| displayname?  | `String` | The display name of a user.                  |
| description?  | `String` | The description set by a user.               |
| id            | `String` | The ULID of the user. Not changeable.        |
| roles?        | `Role[]` | A list of roles given to the user.           |
| admin?        | `Bool`   | Whether the user is an administrator or not. |

----
## Fetch user profile
### **`GET`** `/users/:USER.ID`
Returns a user object with the ID provided.
> This endpoint will return 403 if viewing profile is disabled.

----

## Update user profile
### **`PATCH`** `/users/:USER.ID`
| Parameter      | Param type |
| :------------- | :--------- |
| `username?`    | `String`   |
| `displayname?` | `String`   |
| `description?` | `String`   |

At least one field should be provided.

> You can only edit your own profile. Administrators can edit any profile.