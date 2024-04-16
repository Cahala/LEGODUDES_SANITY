import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductBySlug } from "../../sanity/services/productServices"
import { Link } from "react-router-dom"

export default function ProductPage(){
    const {slug} = useParams()
    const [product, setProduct] = useState(null)

   const getProductBySlug = async (slug) => {
        const data = await fetchProductBySlug(slug)
        setProduct(data[0])
    }

    useEffect(() => {
        getProductBySlug(slug)
    }, [slug])

console.log("product", product)

    if (product) {

        return (
            <main id="productpage">
                <figure>
                    <img src={product?.image} alt={`Produktbilde av LEGO-figuren ${product?.productname}`} />
                </figure>
                <article>
                    <h2>{product?.productname}</h2>
                    <p className="metainfo">
                        <Link to={"/produkt/" + product?.catslug}>{product?.categoryname}</Link>
                        <span className="stockcount">{product?.stock === 0 ? "Tomt" : product?.stock} På lager</span>
                    </p>
                    <p>{product?.description}</p>
                    <p className="priceview">Kr. {product?.price}</p>
                </article>
            </main>
        )
    } else {
        return (
            <main>
                <p>Laster produktinformasjon...</p>
            </main>
        )
    }

  
    
}