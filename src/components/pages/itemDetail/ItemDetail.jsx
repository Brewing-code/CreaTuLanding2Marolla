import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import LinearProgress from "@mui/material/LinearProgress";
import './ItemDetail.css'

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true); 
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setProduct({ ...res.data(), id: res.id });
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, [id]);

  
  if (isLoading) {
      
    return   <LinearProgress className="loader"/>;
    
    }

  return (
    <div className="itemdetail-container">
      <h2 className="itemdetail-title">{product.title}</h2>
      <img src={product.img} alt={product.title} />
			<div className="description">{product.description}</div>
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;