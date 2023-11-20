import { useEffect, useMemo, useState } from "react";
import { API_URLS, fetchData, tableColumn } from "../constants/constant";
import { Center, Heading, Spinner, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useTable } from "react-table";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchProduct = async () => {
     
    try {
        setLoading(true);
      const { data } = await axios.get(API_URLS);
      setProducts(data);
      setLoading(false);
    } 
    catch (error)  {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    
    fetchProduct();
  }, []);
  const columns = useMemo(()=> tableColumn,[]);
  const data = useMemo(()=> products,[])
  const {getTableProps, getTableBodyProps, headerGroups,rows,prepareRow} = useTable({
    columns,
    data,
  });
  console.log(products);
  if (products.length === 0)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  return (
    <>
      <Heading>React Table</Heading>
      <Table {...getTableProps()}>
        <Thead>
            {
                headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) =>(
                            <Th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </Th>
                        ))}
                    </Tr>
                ))
            }
        </Thead>
        <Tbody>
        <Tr>
            <Td></Td>
        </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default Table;
