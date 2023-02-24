import config from "./config";
export async function HomePageContent(){
       const {REACT_APP_API_URL} = config();
       const response = await  fetch(
        REACT_APP_API_URL+'/front/get-home-page-content'
       );
       const data = await response.json();
       return data;
}
export async function SettingsContent(){
     const {REACT_APP_API_URL} = config();
       const response = await  fetch(
        REACT_APP_API_URL+'/front/get-header-content'
       );
       const data = await response.json();
       return data;
}  
export async function AboutPageContent(){
       const {REACT_APP_API_URL} = config();
       const response = await  fetch(
        REACT_APP_API_URL+'/front/get-about-content'
       );
       const data = await response.json();
       return data; 
}
export async function HowWeWorkContent(){
       const {REACT_APP_API_URL} = config();
       const response = await  fetch(
        REACT_APP_API_URL+'/front/get-how-we-work-content'
       );
       const data = await response.json();
       return data; 
}





 