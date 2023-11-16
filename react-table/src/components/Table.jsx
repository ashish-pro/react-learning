import {useEffect, useState} from 'react'
import { API_URLS,fetchData } from '../constants/constant';
import { Center, Heading, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import {useTable} from 'react-table';




const Table = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchProduct = async () =>{
            try{
                const {data} = await axios.get(API_URLS);
                setProducts(data);
            }catch(error){
                console.log(error);
            }
        };
        fetchProduct();
    },[])
    console.log(products);
    if(products.length === 0)
    return(
        <Center>
            <Spinner/>
        </Center>
)

  return (
    <>
    <Heading>
        React Table
    </Heading>
    </>
  )
}

export default Table;