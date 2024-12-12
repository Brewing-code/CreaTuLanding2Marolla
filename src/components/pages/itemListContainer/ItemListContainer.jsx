import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection,addDoc, getDocs, query, where  } from "firebase/firestore";
import LinearProgress from '@mui/material/LinearProgress';
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();
 

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let refCollection = productsCollection;
    if(name){
      const productsCollectionFiltered = query (productsCollection, where("category", "==", name))
      refCollection = productsCollectionFiltered;
    }
    const getProducts = getDocs(refCollection);
    getProducts.then((res) => {
      let products = res.docs.map ((elemento) => {
        return {...elemento.data(), id: elemento.id}
      })
      setMyProducts(products)
    });



  }, [name]);

  if (myProducts.length > 0){

    return (
      <ItemList myProducts={myProducts} />
    )
  } return <LinearProgress className="loader"></LinearProgress>
    
  
};

export default ItemListContainer;

//  const addProducts = () => {
//    let refCollection =  collection(db, "products")
//    products.forEach (elemento => {
//    addDoc(refCollection, elemento)

//  })
//  };
{/* <button onClick={addProducts}>Agregar productos</button> */}