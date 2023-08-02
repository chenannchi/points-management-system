import ProductCard from "../../components/ProductCard/ProductCard"
import { getAllProducts } from "../../services/product-api"
import styles from "../ProductList/ProductList.module.css"
import { useState, useEffect } from "react"

const ProductList = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProductData = async () => {
      const productsData = await getAllProducts()
      setProducts(productsData.data)
      // console.log(starshipData)
    }
    fetchProductData()
  })

  return (
    <main>
      <h1>商品列表</h1>
      <div className={styles.listContainer} >
        {products.map(product =>
        product.stock?
          <ProductCard product={product} id={product.productId} />:null
          // console.log(product)
        )}
      </div>
    </main>
  )
}

export default ProductList