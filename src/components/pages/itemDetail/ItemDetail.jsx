import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../data/Products";
import Counter from "../../common/counter/Counter"

const ItemDetail = () => {
  const { id } = useParams(); 

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
  }, [id]);

  

  return (
    <div className="itemdetail-container">
      <h2>{product.title}</h2>
      <img src={product.img} alt="" />
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
