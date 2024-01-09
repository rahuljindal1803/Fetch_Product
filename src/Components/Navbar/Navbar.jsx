import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItem } from "../../feature/cart/cartSlice";

const Navbar = ({
  search,
  setSearch,
  filteredProducts,
  setFilteredProducts,
  GotoCart,
}) => {
  const cartItems = useSelector(selectCartItem);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navigate = useNavigate();
  const GotoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="w-full h-14 flex justify-between items-center bg-white fixed top-0 z-20">
        <div className="w-44 pl-11 ">
          <h1 className="font-bold text-2xl cursor-pointer" onClick={GotoHome}>
            Shopper
          </h1>
        </div>
        <div className="w-[30rem] space-x-2 h-10 rounded-lg flex items-center p-2  justify-between border border-gray-700 ">
          <input
            className="w-full outline-none"
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <FaSearch />
        </div>
        <div>
          <select
            onChange={(e) => setFilteredProducts(e.target.value)}
            name="filter"
            value={filteredProducts}
            id="filter"
          >
            <option value="">Select</option>
            <option value="recommended">Recommended</option>
            <option value="lth">Low to High</option>
            <option value="htl"> High to Low</option>
          </select>
        </div>

        <div className="w-44 flex items-center justify-center">
          <button
            className="w-24 h-8 rounded-xl bg-gray-500 hover:bg-gray-600 active:bg-white active:text-black text-white"
            onClick={handleClick}
          >
            Logout
          </button>
          <div className="relative w-10 pl-4 cursor-pointer ">
            {cartItems.length > 0 && (
              <p className="absolute -top-4 -right-2 p-1 text-[12px] bg-gray-900 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </p>
            )}
            <FaShoppingCart size="24px " onClick={GotoCart} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
