import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/pages/home";
import ProdCat from "../components/pages/prod-cat";
import MenuList from "../components/pages/menu-list";
import MyBasket from "../components/pages/my-basket";
import Checkout from "../components/pages/checkout";
import Signin from "../components/pages/signin";
import Signup from "../components/pages/signup";
import Profile from "../components/pages/profile";
import OrderDetails from "../components/pages/order-details";
import OrderDetailsCustomer from "../components/pages/order-details-customer";
import LogoutPage from "../components/pages/logoutpage";
import BranchDetail from "../components/pages/branch-detail";
import ProductList from "../components/pages/product-detail";
import Contact from "../components/pages/contact";

export const APP_ROUTES = [
  // {
  //   path: "*",
  //   component: <NotFound />,
  // },
  {
    path : '/',
    component: <Home />,
  },
  {
    path: '/manage-pro-cat',
    component: <ProdCat />,
  },  
  {
    path: '/menu-list',
    component: <MenuList />
  },
  {
    path: '/my-basket',
    component: <MyBasket />
  },
  {
    path: '/checkout',
    component: <Checkout />
  },
  {
    path: '/signin',
    component: <Signin />
  },
  {
    path: '/signup',
    component: <Signup />
  },
  {
    path: '/profile',
    component: <Profile />
  },
  {
    path: '/order-details',
    component: <OrderDetails />
  },
  {
    path: '/order-details-customer',
    component: <OrderDetailsCustomer />
  },
  {
    path: '/logout',
    component: <LogoutPage />
  },
  {
    path: '/BranchDetail',
    component: <BranchDetail />
  },
  {
    path: '/product-details',
    component: <ProductList />
  },
  {
    path: '/contact',
    component: <Contact />
  }
  // {
  //   path: `${MANAGE_BRANCHES_ROUTE}/:id`,
  //   component: <ManageBranches />
  // }


//{
  //   path: '/project/:id/:name/:client',
  //   component : <ProjectDetailView />
  // }
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {APP_ROUTES.map((route, index) => (
          <Route key={index} element={route.component} path={route.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
