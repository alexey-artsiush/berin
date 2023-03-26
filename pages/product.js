import {useState, useEffect} from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Header from "../components/Header";
const Product = ({product}) => {

    return (
      <Header></Header>
    );
};

export default Product;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
