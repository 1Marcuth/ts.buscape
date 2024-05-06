import Xcrap from "xcrap"

import { ParsedBestOffersProductData, ParsedSearchProductData, RawBestOffersProductData, RawSearchProductData } from "./types/product"
import { bestoffersProductModel, searchProductModel } from "./xcrap-models/product"

class Buscape
 {
    protected readonly xcrap: Xcrap

    public constructor() {
        this.xcrap = new Xcrap()
    }

    protected parseSearchProductData(rawProductData: RawSearchProductData): ParsedSearchProductData {
        const parsedProductData: ParsedSearchProductData = {
            title: rawProductData.title,
            imageUrl: rawProductData.imageUrl,
            price: Number(
                rawProductData
                    .price
                    .replace("R$ ", "")
                    .replace(/\./g, "")
                    .replace(/,/g, ".")
            ) * 1000,
            pageUrl: `https://www.buscape.com.br${rawProductData.pageUrl}`
        }

        return parsedProductData
    }

    protected parseBestOffersProductData(rawProductData: RawBestOffersProductData): ParsedBestOffersProductData {
        const parsedProductData: ParsedBestOffersProductData = {
            title: rawProductData.title,
            imageUrl: rawProductData.imageUrl,
            price: Number(
                rawProductData
                    .price
                    .replace("R$ ", "")
                    .replace(/\./g, "")
                    .replace(/,/g, ".")
            ) * 1000,
            pageUrl: rawProductData.pageUrl
        }

        return parsedProductData
    }

    public async getBestOffers(shopId: string): Promise<ParsedBestOffersProductData[]> {
        const url = `https://www.buscape.com.br/cupom-de-desconto/${shopId}/melhores-ofertas`
        const page = await this.xcrap.get(url)
        const rawProducts = page.parseItemGroup(".ProductCard_ProductCard_Inner__mdriI", bestoffersProductModel) as unknown as RawBestOffersProductData[]
        const parsedProducts = rawProducts.map(this.parseBestOffersProductData)
        return parsedProducts
    }

    public async search(query: string): Promise<ParsedSearchProductData[]> {
        const url = `https://buscape.com.br/search?q=${query}`
        const page = await this.xcrap.get(url)
        const rawProducts = page.parseItemGroup(".ProductCard_ProductCard_Inner__gapsh", searchProductModel) as unknown as RawSearchProductData[]
        const parsedProducts = rawProducts.map(this.parseSearchProductData)
        return parsedProducts
    }
}

export default Buscape