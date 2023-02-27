import * as React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
 
import { useState, useEffect } from "react";

const Container = (Component) => {
    const wrappedComponent = (props) => {
        const settingsContent = props.settingsContent;
        
        return (<>
          <Header settings={settingsContent}></Header>
          <Component {...props} />
          <Footer></Footer>
          <LetsTalk settings={settingsContent}></LetsTalk>
        </>);
      //   const [initialRenderComplete, setInitialRenderComplete] = useState(false);
      //   useEffect(() => {
      //     setInitialRenderComplete(true);
      //   }, []);
      // if (!initialRenderComplete) {
      //       return null;
      // } else {
       
      //   }
    }
    return wrappedComponent;
  };  
  export default Container;