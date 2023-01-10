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
  AuthPage
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { API_URL } from "lib/constants";
import { ColorModeContextProvider } from "@contexts";
import { Header, Layout } from "@components/layout";
import { ItemList, ItemCreate, ItemEdit } from "@components/items";
import { OrderList, OrderCreate, OrderEdit } from "@components/orders";
import { OrderShow } from "@components/orders/show";
import { authProvider } from "src/authProvider";
import Head from "next/head";
import "@components/layout/style.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Furnit</title>
        <link rel="preconnect" href="<https://app.snipcart.com>"/>
        <link rel="preconnect" href="<https://cdn.snipcart.com>"/>
        <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <script
            async
            src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
        />
      </Head>
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
            authProvider={authProvider}
            LoginPage={AuthPage}
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
              },
              {
                name: "store"
              }
            ]}
          >
            <Component {...pageProps} />
          </Refine>
        </RefineSnackbarProvider>
      </ColorModeContextProvider>
          <div hidden id="snipcart" data-api-key="ZDBmMzUxZTgtODA3NC00ZWE5LWJiZWEtMmVkZTQ4NTQ2YTUxNjM4MDU5MzQ1MTk5OTY3NzI2" />
    </>
  );
}

export default MyApp;
