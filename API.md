# This document describes the jancloud API.

# References

## Error Handling

**ERROR HANDLING WHEN????**

## Password hashing
(TODO describe how passwords should be hashed here)
# User

The user object describes the information of a user profile.
| key           | type   | description                         |
| :------------ | :----- | :---------------------------------- |
| username      | string | The name of a user, editable at any time.
| id            | string | The ULID of the user. Not changeable.


## **POST** /signin/register

| Parameter      | Param type | Required |
| :------------- | :--------- | :------- |
| `username`     | `String`   | Yes      |
| `password`     | `String`   | Either `password` or `passwordHash` |
| `passwordHash` | `String`   | Either `password` or `passwordHash` |

Registers a new account. Either one of `password` or `passwordHash` must be supplied, however it is strongly recommended to use `passwordHash`. \
`passwordHash` must be [hashed using the argon2 algorithm](#Password-hashing). If `password` is supplied instead, the password will be hashed on the server side. **If you're using this, make sure you're connecting via https!**

