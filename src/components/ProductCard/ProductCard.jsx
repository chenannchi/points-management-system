import styles from "../ProductCard/ProductCard.module.css"
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

  return (
    <div className={styles.container}>
      <img src={product.imgUrl} alt="product" />
      <div><strong>{product.productName}</strong></div>
      <div>{product.points}點</div>
      <Link
        className="link"
        to={`/${product.productId}`}
        state={{ product }}
      >
        <div className="class-div">
          <button>我要兌點</button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard