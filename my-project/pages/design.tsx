import { Unity, useUnityContext } from "react-unity-webgl";

function MyApp(): JSX.Element {
    const { unityProvider } = useUnityContext({
        loaderUrl: "public/web/Build/web.loader.js",
        dataUrl: "public/web/Build/web.data.gz",
        frameworkUrl: "public/web/Build/web.framework.js.gz",
        codeUrl: "public/web/Build/web.wasm.gz",
      });

    return (
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
    );
  }
  
  export default MyApp;