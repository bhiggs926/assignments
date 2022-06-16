
const statusArr = ['Dead', 'Small', 'Big', 'Powered Up']


class Player{
    constructor(name, totalCoins, status, hasStar){
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = false
    }

    
    // setName(namePicked){
    //     Player.name = Math.floor(Math.random()*2)
    //     if (namePicked === 0){
    //        return this.name = 'Mario'
    //     } else {
    //        return this.name  = 'Mario'
    //     }
    // }

    setName(namePicked) {
        const randomNum = Math.floor(Math.random() * 2);
        randomNum === 0 ? namePicked = 'Mario' : namePicked = 'Luigi'
        this.name = namePicked
      }

    gotHit(){
        if (this.hasStar === true){
            console.log(`the star protected you`)
            this.hasStar = false
        }
        if (this.status === 'Small'){
            this.status = statusArr[0]
        } else if (this.status === 'Big'){
            this.status = this.status[1]
        } else if (this.status === 'Powered Up'){
            this.status = this.status[2]
        }
    }
// possibly use code below for gotHit()
    // gotHit() {
    //     if (this.status === statuses[0]) {
    //       this.status = statuses[1];
    //     } else if (this.status === statuses[1]) {
    //       this.status = statuses[2];
    //     } else {
    //       this.status = statuses[3];
    //       console.log(`You've Died. Game Over`);
    //       clearInterval(beginGame) //why does it have to be here ?
    //     }
    //   }

    powerUp(){
        if (this.status === 'Powered Up'){
            this.hasStar = true
        }
        if (this.status === 'Small'){
            this.status = statusArr[2]
        } else if (this. status === 'Big'){
            this.status === statusArr[3]
        } else if(this.status === 'Powered Up'){
            this.hasStar = true
        }
    }

    addCoin(){
        this.totalCoins += 1
    }

    print(){
        console.log(`Name: ${this.name} \nCoins: ${this.totalCoins} \nStatus: ${this.status} \nStar: ${this.hasStar} \n`)
    };
}

const test = new Player('Test', 0, 'Small', false);
test.setName()
const randomRange = () => {
  // if (this.status === statuses[3]) {
  //   clearInterval(beginGame) //instead of here
  // }
  const decisionMaker = Math.floor(Math.random() * 3);
  if (decisionMaker === 0) {
    test.gotHit();
  } else if (decisionMaker === 1) {
    test.powerUp();
  } else {
    test.addCoin();
  }
  test.print();
  // if (this.status === statuses[3]) {
  //   clearInterval(beginGame) //or here
  // }
}
const beginGame = setInterval(randomRange, 1500);