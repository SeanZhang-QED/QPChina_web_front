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