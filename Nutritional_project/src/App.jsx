import React from "react";
import "./scss/style.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import rootReducer from "./redux"
import { Provider } from "react-redux";
import store from "./Redux/store";

// 리덕스에 비동기 작업도 실행시키기 위해 redux-thunk를 적용함
// const store = createStore(rootReducer)

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
