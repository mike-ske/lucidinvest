
import Layout from "@/components/layout/Layout";
import "../../public/assets/css/color-1.css";
import Banner from "@/components/sections/home2/Banner";
import Price from "@/components/sections/home2/Pricing";
import Service from "@/components/sections/home2/Services";
import Market from "@/components/sections/home2/Market";
import Trade from "@/components/sections/home2/Trade";
import Account from "@/components/sections/home2/Account";
import Broker from "@/components/sections/home2/Broker";
import Platforms from "@/components/sections/home2/Platforms";
import Blog from "@/components/sections/home2/Blog";
import Partners from "@/components/sections/home2/Partners";
import Testimonial from "@/components/sections/home2/Testimonial";
import Faq from "@/components/sections/home2/Faq";
import Contact from "@/components/sections/home2/Contact";
export default function Home_Two() {

    return (
        <div className="body-bg-2">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner/>
                <Price/>
                <Service/>
                <Market/>
                <Trade/>
                <Account/>
                <Broker/>
                <Platforms/>
                <Blog/>
                <Partners/>
                <Testimonial/>
                <Faq/>
                <Contact/>
            </Layout>
        </div>
    )
}
