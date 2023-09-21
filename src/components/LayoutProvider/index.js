'use client'
import Header from "@/components/Header";
import ContextProvider from "@/context/Provider";
import ReactQueryProvider from "@/app/ReactQueryProvider";


const LayoutProvider = ( { children } ) => {

  return (
    <ContextProvider>
      <ReactQueryProvider>
        <Header/>
        { children }
      </ReactQueryProvider>
    </ContextProvider>

  )
}
export default LayoutProvider;
