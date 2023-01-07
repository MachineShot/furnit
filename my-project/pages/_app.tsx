import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
  Layout
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { API_URL } from "lib/constants";
import { ColorModeContextProvider } from "@contexts";
import { Header } from "@components/layout";
import { ItemList, ItemCreate, ItemEdit } from "@components/items";
import { OrderList, OrderCreate, OrderEdit } from "@components/orders";
import { OrderShow } from "@components/orders/show";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Header={Header}
          resources={[
            {
              name: "items",
              list: ItemList,
              create: ItemCreate,
              edit: ItemEdit
            },
            {
              name: "orders",
              list: OrderList,
              edit: OrderEdit,
              show: OrderShow
            }
          ]}
        >
          <Component {...pageProps} />
        </Refine>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default MyApp;
