const form = document['baddieList']

 form.addEventListener('submit', (e) => {
    e.preventDefault()

    const goomba = form.goomba.value
    form.goomba.value =""
    console.log(goomba)
    const bob= form.bob.value
    form.bob.value =""
    console.log(bob)
    const cheep = form.cheep.value
    form.cheep.value= ""
    console.log(cheep)

    const goombaCharge = Math.floor(goomba) *5
    const bobCharge = Math.floor(bob) *7
    const cheepCharge = Math.floor(cheep) *11

    document.getElementById("goombaSum").append(goombaCharge)
    document.getElementById("bobSum").append(bobCharge)
    document.getElementById('cheepSum').append(cheepCharge)
 })