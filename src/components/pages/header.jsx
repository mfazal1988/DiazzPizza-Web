import {
  Link,
  Stack,
  Paper,
  MenuList,
  MenuItem,
  Button,
  Grow,
  ClickAwayListener,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopOver from "./../Popover/popover";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [nav, setNav] = useState();
  const navigate = useNavigate();
  const [popoverContent, setPopoverContent] = useState();
  const { authResponse, authResponseLoading, authResponseError } = useSelector(
    (state) => state.auth
  );
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navBarItems = [
    { key: 1, title: "Home", url: "/" },
    { key: 2, title: "Menu", url: "/menu-list" },
    { key: 3, title: "My Basket", url: "/my-basket" },
    {
      key: 4,
      title: "My Profile",
      url: "",
      submenu: [        
        { key: 3, title: "Sign up", url: "/signup" },
        { key: 4, title: "Sign in", url: "/signin" },
      ],
    },
    { key: 5, title: "Contact", url: "/contact" },
  ];

  const navBarItemsCustomer = [
    { key: 1, title: "Home", url: "/" },
    { key: 2, title: "Menu", url: "/menu-list" },
    { key: 3, title: "My Basket", url: "/my-basket" },
    {
      key: 4,
      title: "My Profile",
      url: "",
      submenu: [
        { key: 1, title: "View Profile", url: "/profile" },
        { key: 2, title: "My Orders", url: "/order-details-customer"},
        { key: 5, title: "Logout", url: "/logout" },
      ],
    },
    { key: 5, title: "Contact", url: "/contact" },
  ];

  const navBarItemsAdmin = [
    { key: 1, title: "Home", url: "/" },
    { key: 2, title: "Menu", url: "/menu-list" },
    { key: 3, title: "My Basket", url: "/my-basket" },
    {
      key: 4,
      title: "My Profile",
      url: "",
      submenu: [
        { key: 1, title: "View Profile", url: "/profile" },
        { key: 2, title: "My Orders", url: "/order-details-customer"},
        { key: 3, title: "Logout", url: "/logout" },
      ],
    },
    {
      key: 5,
      title: "Admin",
      url: "",
      submenu: [
        { key: 1, title: "Branch Detail", url: "/BranchDetail" },
        { key: 2, title: "Product Details", url: "/product-details" },
        { key: 3, title: "Product Category", url: "/manage-pro-cat" },
        { key: 4, title: "Order Details", url: "/order-details" },
      ],
    },
    { key: 6, title: "Contact", url: "/contact" },
  ];

  const handleToggle = (event) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuOpen = (event, item) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    setNav(navBarItems);
  },[])

  useEffect(()=>{
    if(authResponse && authResponse.data.roles[0] === "Customer"){
      setNav(navBarItemsCustomer);
    }else if(authResponse && authResponse.data.roles[0] === "Administrator"){
      setNav(navBarItemsAdmin);
    }
  },[authResponse])

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
      style={{ width: "100%" }}
    >
      <div>
        <Stack direction="row" spacing={2}>
          <Link className="navbar-brand" href="#" sx={{width: "200px"}}>
            <span className="flaticon-pizza-1 mr-1"></span>Diazz Pizza
            <br />
            <small>Delicious</small>
          </Link>
          {nav && nav.map((item) => {
            return (
              <Button
                id="basic-button"
                className="nav-item"
                sx={{ color: "#fff"}}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(e) =>
                  item.submenu ? handleMenuOpen(e, item) : navigate(item.url)
                }
              >
                {item.title}
              </Button>
            );
          })}
        </Stack>
        <PopOver handleClose={handleClose} anchorEl={anchorEl}>
          {popoverContent && popoverContent.submenu.length > 0 && (
            <MenuList sx={{ minWidth: "200px", padding: 0 }}>
              {popoverContent.submenu.map((subItem) => {
                return (
                  <MenuItem
                    className="nav-link"
                    key={subItem.key}
                    onClick={() => navigate(subItem.url || "")}
                  >
                    {subItem.title}
                  </MenuItem>
                );
              })}
            </MenuList>
          )}
        </PopOver>
      </div>
      {/* <div className="container">
        <Link className="navbar-brand" href="#"><span className="flaticon-pizza-1 mr-1"></span>Diazz Pizza<br /><small>Delicious</small></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link className="nav-link">Home</Link></li>
                <li className="nav-item"><Link className="nav-link">Menu</Link></li>
                <li className="nav-item"><Link className="nav-link">Services</Link></li>
                <li className="nav-item"><Link className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link className="nav-link">About</Link></li>
                <li className="nav-item"><Link className="nav-link">My Basket</Link></li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="temporaryMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Temporary</Link>
                    <div className="dropdown-menu" aria-labelledby="temporaryMenu">
                        <Link className="dropdown-item" href="Checkout.html">Checkout</Link>
                        <Link className="dropdown-item" href="Payments.html">Payments</Link>
                        <Link className="dropdown-item" href="OrderDetailsView.html">OrderDetailsView</Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="profileMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Profile</Link>
                    <div className="dropdown-menu" aria-labelledby="profileMenu">
                        <Link className="dropdown-item" href="MyProfile.html">View Profile</Link>
                        <Link className="dropdown-item" href="Sign-up.html">Sign-up</Link>
                        <Link className="dropdown-item" href="Sign-In.html">Sign-In</Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="adminMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</Link>
                    <Link className="dropdown-item" href="/manage-pro-cat">Product Category</Link>
                    <div className="dropdown-menu" aria-labelledby="adminMenu">
                        <Link className="dropdown-item" href="BranchDetail.html">Branch Detail</Link>
                        <Link className="dropdown-item" href="ProductDetails.html">Product Details</Link>
                        <Link className="dropdown-item" href="/manage-pro-cat">Product Category</Link>
                        <Link className="dropdown-item" href="OrderDetails.html">Order Details</Link>
                    </div>
                </li>

                <li className="nav-item active"><Link className="nav-link">Contact</Link></li>
            </ul>
        </div>
    </div> */}
    </nav>
  );
};

export default Header;
