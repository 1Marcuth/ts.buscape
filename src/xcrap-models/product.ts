import { extractAttribute, extractInnerText } from "xcrap"
import { Model } from "xcrap/dist/page"

const searchProductModel: Model = {
    title: {
        query: ".ProductCard_ProductCard_Name__U_mUQ",
        extractor: extractInnerText
    },
    imageUrl: {
        query: ".ProductCard_ProductCard_Image__4v1sa img",
        extractor: extractAttribute("src")
    },
    price: {
        query: ".Text_MobileHeadingS__HEz7L",
        extractor: extractInnerText
    },
    pageUrl: {
        extractor: extractAttribute("href")
    }
}

const bestoffersProductModel: Model = {
    title: {
        query: ".ProductCard_ProductCard_Name__7UxBX",
        extractor: extractInnerText
    },
    imageUrl: {
        query: ".ProductCard_ProductCard_Image__lG_w9 img[loading='lazy'], .ProductCard_ProductCard_Image__lG_w9 noscript img",
        extractor: (element) => { console.log(element); return extractAttribute("src")(element) }
    },
    price: {
        query: ".Text_MobileHeadingS__XS_Au",
        extractor: extractInnerText
    },
    pageUrl: {
        extractor: extractAttribute("href")
    }
}

export {
    searchProductModel,
    bestoffersProductModel
}