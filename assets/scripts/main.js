const coinWithoutClass = {

    state: 0,

    flip: function () {
        console.log("coin.flip() has been invoked.")
    },

    toString: function () {
        console.log("coin.toString() has been invoked.")
    },

    toHTML: function () {
        let image = document.createElement('img')

        console.log("coin.toHTML() has been invoked.")

        return image
    }

}

const coin1 = new Coin(1);
const coin2 = new Coin(0);
const coin3 = new Coin(1);

console.group("coinWithoutClass")
console.log(coinWithoutClass)
console.groupEnd()

console.group('coinWithClass');
console.log({coin1, coin2, coin3});
console.groupEnd();
