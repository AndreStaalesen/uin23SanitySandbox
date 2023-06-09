import ProductCard from "../ProductCard"

export default function FrontPage({products}) {
    return (
        <>
        <h1>Innhold fra sanity</h1>
        {products?.map((p, i) => <ProductCard key={i} productinfo={p}/> )}
        </>
    )
}