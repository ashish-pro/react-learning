export const API_URL = "https://fakestoreapi.com/products";

export const fetchData = [  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },]

  export const tableColumn = [
    {
      Header: "Not Yet Changed",
      columns: [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Category",
          accessor: "category",
        },
      ],
    },
    {
      Header: "Changed",
      columns: [
        {
          Header: "Product Image",
          accessor: "image",
          Cell: ({ row }) => <Image src={row.values.image} h={100} />,
        },
        {
          Header: "Price",
          accessor: "price",
          Cell: ({ row }) => ` $${row.values.price}`,
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: ({ row }) => (
            <Button size="sm" onClick={() => alert(`$${row.values.price}`)}>
              Show Price
            </Button>
          ),
        },
      ],
    },
  ];