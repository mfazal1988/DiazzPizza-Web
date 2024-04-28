import { API } from "./builder";

export const GetAuthAPI = (request) => {
  const url = "/login";
  return API.post(url, request);
};

export const LogoutUserAPI =() =>{
  const url = `/logout`;
  return API.get(url);
}

export const GetLoggedUserAPI =(token) => {
  const url = `/loggeduser`;
  return API.post(url, { token: token });
}

export const SaveCategoryAPI =(request) =>{
  const url = `ProductCategory/CreateProductCategory`;
  return API.post(url, request);
}

export const GetProductListAPI =(name, page, pagesize) =>{
  const url = `Product/GetPagedListProduct?Name=${name}&PageNumber=${page}&PageSize=${pagesize}`;
  return API.get(url);
}

export const SaveOrderAPI = ( request) =>{
  const url = `Order/CreateOrder`;
  return API.post(url, request);
}

export const Authenticate = ( request) =>{
  const url = `Account/Authenticate`;
  return API.post(url, request);
}

export const RegisterCustomerAPI = (request) =>{
  const url = `Account/RegisterAccount`;
  return API.post(url, request);
}

export const GetPagedListOrderAPI =(query, page, pagesize) =>{
  // const url = `/Order/GetPagedListOrder?query=${query.search}&cat=${query.cat}`;
  const url = `Order/GetPagedListOrder?${query.order && `OrderNumber=${query.order}`}&PageNumber=${page}&PageSize=${pagesize}`
  return API.get(url);
}

export const GetOrderByCreatedUserIdAPI =(query, page, pagesize) =>{
  // const url = `/Order/GetPagedListOrder?query=${query.search}&cat=${query.cat}`;
  const url = `Order/GetOrderByCreatedUserId?UserGUId=${query.userid}&PageNumber=${page}&PageSize=${pagesize}`
  return API.get(url);
}

export const UpdateOrderStatusAPI = (request) =>{
  const url = `Order/UpdateOrderStatus`;
  return API.put(url, request);
}

export const UpdateOrderDeliveryPersonAPI = (request) =>{
  const url = `Order/UpdateOrderDeliveryPerson`;
  return API.put(url, request);
}


