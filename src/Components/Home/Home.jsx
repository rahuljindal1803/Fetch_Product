import Products from "../Products/Products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
   const [Product, setProduct] = useState([]);
   const [search, setSearch] = useState("");
   const [filteredProducts, setFilteredProducts] = useState("price");
   const navigate = useNavigate();

   useEffect(() => {
      fetch("https://dummyjson.com/products")
         .then((res) => res.json())
         .then((data) => setProduct(data.products))
         .catch((error) => console.error("Error fetching data:", error));
   }, [filteredProducts]);

   const GotoCart = () => {
      navigate("/cart");
   };

   const handleClick = () => {
      localStorage.removeItem("token");
      navigate("/login");
   };

   return (
      <div className=" ">
         <Navbar
            search={search}
            setSearch={setSearch}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            handleClick={handleClick}
            GotoCart={GotoCart}
         />
         <div className="mt-12 w-full h-full bg-white flex justify-center">
            <div className="card_board flex flex-wrap w-5/6  p-9 ">
               {Product &&
                  Product.filter((note) =>
                     note.title.toLowerCase().includes(search?.toLowerCase())
                  )
                     .sort((a, b) => {
                        switch (filteredProducts) {
                           case "recommended":
                              return b.rating - a.rating;
                           case "lth":
                              return a.price - b.price;
                           case "htl":
                              return b.price - a.price;
                           default:
                              return 0;
                        }
                     })

                     .map((item, index) => (
                        <Products
                           key={index}
                           id={item?.id}
                           title={item?.title}
                           description={
                              item?.description
                                 ? item?.description.slice(0, 100)
                                 : ""
                           }
                           price={item?.price}
                           imageUrl={item?.images[0]}
                           ratings={item?.rating}
                        />
                     ))}
            </div>
         </div>
      </div>
   );
};

export default Home;
