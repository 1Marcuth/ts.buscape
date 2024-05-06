export type RawSearchProductData = {
    title: string
    imageUrl: string
    price: string
    pageUrl: string
}

export type ParsedSearchProductData = {
    title: string
    imageUrl: string
    price: number
    pageUrl: string
}

export type RawBestOffersProductData = {
    title: string
    imageUrl: string
    price: string
    pageUrl: string
}

export type ParsedBestOffersProductData = {
    title: string
    imageUrl: string
    price: number
    pageUrl: string
}