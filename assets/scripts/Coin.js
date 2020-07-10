class Coin {

    constructor(state) {
        this.state = state;
    }//end constructor

    flip() {
        console.log('coin.flip() has been invoked');
    }//end flip

    toString() {
        console.log('coin.toString() has been invoked');
    }//end toString

    toHTML() {
        let img = document.createElement('img');
        console.log('coin.toHTML() has been invoked');
        return img;
    }//end toHTML

}//end class Coin