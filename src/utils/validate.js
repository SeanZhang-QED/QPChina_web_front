export function isEmail(mail) {
    // step 1: email name
    // Upper and lower case letters
    // 0-9
    // _ and -
    // => [a-zA-Z0-9_-]+
    // step 2: email domain
    // **    .**
    // **            => [a-zA-Z0-9_-]+
    // .**           => \.[a-zA-Z0-9_-]+
    // multiple .**  => (\.[a-zA-Z0-9_-]+)+
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mail);
}

export function isUsername(username) {
    return /^[a-zA-Z][a-zA-Z0-9]*$/.test(username);
    // return /^(?![0-9~@*()_]+$)[\\da-zA-Z0-9]*$/.test(username);
}

export function isPhone(phone) {
    // 0-9
    // => [0-9]
    // 000-000-0000 => 10
    return /^[0-9]{10}$/.test(phone);
}