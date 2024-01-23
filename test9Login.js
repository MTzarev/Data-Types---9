function login(input) {
    let user = input.shift()
    pass = ""
    for (let i = user.length - 1; i >= 0; i--) {
        pass += user[i]
    }
    let passGuess = input.shift();
    let wrong = 0;

    while (pass !== passGuess) {
        wrong++
        if (wrong === 4) {
            console.log(`User ${user} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        passGuess++
        passGuess = input.shift()

    }


    console.log(`User ${user} logged in.`)
}
login(['Acer', 'login', 'go', 'let me in', `gosho`,'recA']);
//login (['momo','omom']);
//login (['sunny','rainy','cloudy','sunny','not sunny']);