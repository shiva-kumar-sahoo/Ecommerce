"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "@/Redux/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/loading";

function StoreProvider({ children, token }) {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Header token={token} />
        {children}
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default StoreProvider;
