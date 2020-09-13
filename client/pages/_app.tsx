import { ChakraProvider } from "@chakra-ui/core";
import type { AppProps } from "next/app";

const MauthApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider resetCSS>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MauthApp;
