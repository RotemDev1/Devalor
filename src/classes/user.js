export class User {
    constructor(username, age, petName = "", petType = "", agreement = false) {
        this.username = username;
        this.age = age;
        this.petName = petName;
        this.petType = petType;
        this.agreement = agreement;
    }
    setPetName(petName) {
        this.petName = petName;
    }
    setPetType(petType) {
        this.petType = petType;
    }
    setAgreement() {
        this.agreement = true;
    }
}