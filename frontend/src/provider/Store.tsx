import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { AuthApi } from "./queries/Auth.query";
import { OrdersApi } from "./queries/Orders.query";
import { UserApi } from "./queries/Users.query";
import { SidebarSlice } from "./slice/Sidebar.slice";
import { UserSlice } from "./slice/user.slice";

export const store = configureStore({
  reducer: {
    [UserSlice.name]: UserSlice.reducer,
    [SidebarSlice.name]: SidebarSlice.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [OrdersApi.reducerPath]: OrdersApi.reducer,
  },

  middleware: (d) =>
    d().concat(AuthApi.middleware, UserApi.middleware, OrdersApi.middleware),
});

setupListeners(store.dispatch);
