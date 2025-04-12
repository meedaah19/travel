import About from "./components/About";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PaymentMethod from "./components/PaymentMethod";

export default function App(){
    return(
        <main>
            <Header/>
            <Content/>
            <About/>
            <Footer/>
            <PaymentMethod/>
        </main>
    )
}