import { useEffect, useState } from "react";
import { FiSearch, FiX, FiHeart, FiShoppingCart, FiUser, FiChevronDown } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/zora-logo.png";
import { useLocation } from "react-router-dom";
import "./UserHeader.css";

function UserHeader() {
  
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const search = params.get("search");

  if (search) {
    setSearchTerm(search);
    setShowSearch(true); // 🔥 keep search open
  }
}, [location]);

  const handleSearch = (value) => {
  setSearchTerm(value);
  const trimmed = value.trim();

  if (trimmed.length >= 4) {
    navigate(`/products/all?search=${encodeURIComponent(trimmed)}`);
  }

  if (trimmed.length === 0) {
    navigate("/");
  }
};

  // 🔁 Read wishlist count
  const fetchWishlistCount = async () => {
    if (!user?.token) {
      setWishlistCount(0);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/wishlist/count", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!res.ok) {
        setWishlistCount(0);
        return;
      }

      const data = await res.json();
      setWishlistCount(data.count || 0);
    } catch (err) {
      console.error("Wishlist count error", err);
      setWishlistCount(0);
    }
  };

useEffect(() => {
  fetchWishlistCount();

  const handler = () => fetchWishlistCount();
  window.addEventListener("wishlistUpdated", handler);

  return () => {
    window.removeEventListener("wishlistUpdated", handler);
  };
}, [user]);

  const fetchCartCount = async () => {
    if (!user?._id) {
      setCartCount(0);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/cart/${user._id}`
      );
      const data = await res.json();

      const count =
        data.items?.reduce((sum, item) => sum + item.qty, 0) || 0;

      setCartCount(count);
    } catch (err) {
      console.error("Cart count error", err);
    }
  };

  useEffect(() => {
  if (!user?._id) {
    setCartCount(0);
    return;
  }

  fetchCartCount();

  const handleCartUpdate = () => {
    fetchCartCount();
  };

  window.addEventListener("cartUpdated", handleCartUpdate);

  return () => {
    window.removeEventListener("cartUpdated", handleCartUpdate);
  };
}, [user]);

  return (
    <header className="user-header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src={logo} alt="ZORA Logo" className="logo-img" />
        </Link>
      </div>

      <div className="header-actions">
        {/* SEARCH */}
        <div className={`search-wrapper ${showSearch ? "active" : ""}`}>
          {showSearch && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
          )}

          <button
            className="icon-btn"
            onClick={() => setShowSearch((p) => !p)}
          >
            {showSearch ? <FiX /> : <FiSearch />}
          </button>
        </div>


        {/* ❤️ WISHLIST */}
        <Link to="/wishlist" className="icon-btn wishlist-icon">
          <FiHeart />
          {wishlistCount > 0 && (
            <span className="wishlist-badge">{wishlistCount}</span>
          )}
        </Link>

        <Link to="/cart" className="icon-btn cart-icon">
          <FiShoppingCart />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        <div className="header-actions">

          {user ? (
            <div className="account-wrapper">
              <button className="account-btn" onClick={() => setOpen(!open)}>
                <FiUser />
                <FiChevronDown />
              </button>

              {open && (
                <div className="account-dropdown">
                  <p className="user-identity">
                    {userInfo?.name || userInfo?.phone}
                  </p>
                  <Link to="/my-orders">My Orders</Link>
                  <Link to="/profile">My Profile</Link>

                  <button
                    className="logout-btn"
                    onClick={() => {
                      logout();
                      navigate("/", { replace: true });
                    }}
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default UserHeader;  
