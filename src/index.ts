import Buscape from "./buscape"

(async () => {
    const buscape = new Buscape()

    // const products = await buscape.search("s21 fe")
    const products2 = await buscape.getBestOffers("amazon-1582")

    // console.dir(products, { depth: null })
    console.dir(products2, { depth: null })
})()