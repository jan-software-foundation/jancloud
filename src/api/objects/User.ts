export class User {
    constructor(username: String, id: String) {
        this.username = username;
        this.id = id;
    }
    username: String;
    id: String;
    passwordHash?: String; // Login should be disabled when missing
}