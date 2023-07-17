import '@/styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Navbar from "@/components/Navbar/Navbar";

export default function App({Component, pageProps}) {
    return (
        <>
            <QueryClientProvider client={new QueryClient()}>
                <Navbar/>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}
