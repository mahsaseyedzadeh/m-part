import Header from "@/components/Header";

const LayoutProvider = ({children}) =>{

  return (
    <>
      <Header/>
      {children}
    </>
  )
}
export default LayoutProvider;
