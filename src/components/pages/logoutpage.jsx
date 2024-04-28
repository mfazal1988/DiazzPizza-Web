import { useEffect } from "react";
import { useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import { logout } from "../../store/auth/authAction";

const LogoutPage = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      dispatch(logout());

      const timer = setTimeout(() => {
        navigate('/');
      }, 4000);
      return () => clearTimeout(timer);
    },[]);

    return <><Header />

    <Box sx={{ marginLeft: "45px", width: "100%" }}>
      <Typography variant="h4" className="mb-3 mt-5 ml-4 bread">
        Successfully Logout!
      </Typography>
      <Typography variant="h6">You will be redirected shortly!</Typography>
    </Box>

    <Footer /></>;
}

export default LogoutPage;