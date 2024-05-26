class User {
    constructor(id ,name, email, rule, pictureURL) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.pictureURL = pictureURL;
        this.rule = rule;
        this.iniciativas = [];
    }
}

export { User };