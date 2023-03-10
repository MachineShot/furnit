import { GetServerSideProps } from "next";
import {
  NextRouteComponent,
  handleRefineParams,
} from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { API_URL } from "lib/constants";
import { checkAuthentication } from "@pankod/refine-nextjs-router";
import { authProvider } from "src/authProvider";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resource, action, id } = handleRefineParams(context.params?.refine);

  const { isAuthenticated, ...authenticationValues } =
    await checkAuthentication(authProvider, context);

  if (!isAuthenticated) {
    return {
      ...authenticationValues,
      props: {
        ...("props" in authenticationValues ? authenticationValues.props : {}),
      },
    };
  }

  try {
    if (resource && action === "show" && id) {
      const data = await dataProvider(API_URL).getOne({
        resource: resource.slice(resource.lastIndexOf("/") + 1),
        id,
      });

      return {
        props: {
          initialData: data,
        },
      };
    } else if (resource && !action && !id) {
      const data = await dataProvider(API_URL).getList({
        resource: resource.slice(resource.lastIndexOf("/") + 1),
      });

      return {
        props: {
          initialData: data,
        },
      };
    }
  } catch (error) {
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default NextRouteComponent.bind({ initialRoute: "/store" });;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `NextRouteComponent` like the following:
 *
 * export default NextRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
