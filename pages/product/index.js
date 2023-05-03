import Button from "/components/Button";
import { useDispatch } from "react-redux";
import styles from "/styles/Home.module.scss";
import Article from "@/components/Article";
import ProductImage from "@/components/ProductImage";
import ProductOptions from "@/components/ProductOptions";
import {Alert, Stack} from "@mui/material";
import {useEffect} from "react";
import {getBasketGoods} from "@/redux/actions/actionCreator";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBasketGoods())
  },[]);
  return (
    <div className={styles.homePage}>
      <div className={styles.productWrapper}>
        <div className={styles.productImagesWrapper}>
          <ProductImage />
        </div>
        <div className={styles.productOptionsWrapper}>
          <ProductOptions />
        </div>
      </div>
      <Article
        title="Text title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis."
      />

      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert sx={{ backgroundColor: "rgb(220 220 220)" }} onClose={() => {}}>This is a success alert — check it out!</Alert>
      </Stack>
    </div>
  );
};

export default Product;
