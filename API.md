# This document describes the jancloud API.

# References

## Error Handling

**ERROR HANDLING WHEN????**
# User

The user object describes the information of a user profile.
| Key           | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| username      | `String` | The name of a user, editable at any time. |
| id            | `String` | The ULID of the user. Not changeable.     |


## **POST** /signin/register

| Parameter      | Param type | Required |
| :------------- | :--------- | :------- |
| `username`     | `String`   | Yes      |
| `password`     | `String`   | Yes      |

Registers a new account. (Will be disabled by default in the future)
