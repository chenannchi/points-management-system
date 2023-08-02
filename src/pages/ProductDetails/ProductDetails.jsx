// import { getAllProducts } from "../../services/product-api"
import styles from "../ProductDetails/ProductDetails.module.css"
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { Alert } from '@mui/material';


const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;
  console.log(product)

  const [showAlert, setShowAlert] = useState(false);

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleButtonClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      window.location.href = "/"
    }, 2000);
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={handleGoBack}>&lt;</button>
      <img src={product.imgUrl} alt="product" />
      <h2>{product.productName}</h2>
      <h3>{product.points}點</h3>
      <div className="pointUse">
        <button onClick={handleDecrement} disabled={count <= 1}>-</button>
        <div>{count}</div>
        <button onClick={handleIncrement} disabled={count >= product.stock}>+</button>
      </div>
      <p>注意事項:{product.productPrecaution}</p>
      <button onClick={handleButtonClick}
      >
        確認兌換
      </button>
      {showAlert && <Alert severity="success">

        已成功兌換<div>{count}</div>個商品
      </Alert>}
    </div>
  )
}

export default ProductDetails