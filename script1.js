function printUserAccess(user) {
    let accessLevel;

    if (user.isAdmin) {
        accessLevel = "admin";
    } else {
        accessLevel = "user";
    }

    console.log(`Access Level: ${accessLevel}`)
}

const user1 = { isAdmin: true };
printUserAccess(user1);