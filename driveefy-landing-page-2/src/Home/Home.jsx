import Truck_Image from "../assets/Images/Truck-1.png";
import PillarCard from "./components/PillarCard";
import { Pillar_Data } from "../utils/data";
import TabSystem from "../common/tabsComponent/TabSystem";
import "./home.scss"
const Home = () => {
    return (
        <>
            <div className="home-main-container">
                <div className="home-main-content">
                    <p className="home-main-title">#Automating Trucking Industry</p>
                    <p className="home-main-subtitle">From Highways to Homes, Your Trucks Build India.</p>
                    <p className="home-main-tagline">Let Driveefy Reduce Costs,<br /> Save Time, and Build Your Success.</p>
                    <p className="home-main-description">We understand that trucks are more than just vehicles. Simplifying operations, reducing manual efforts, managing <br/>the  workforce, and empowering the real heroes of the road to drive business growth
                    </p>
                    <button className="home-main-button">Join <span>DRIVEEFY</span> Family</button>
                    <div className="home-main-image">
                        <img src={Truck_Image} alt="Truckimage" />
                    </div>
                </div>
                <div className="core-pillar-container">
                    <p className="core-pillar-title">Three Core Pillars that Empower Your Business <br/> with <span>DRIVEEFY</span> </p>
                    <p className="core-pillar-description">We focus on what matters most to your organization—driving efficiency, saving time,<br /> and ensuring customer satisfaction:
                    </p> 
                    <div className="core-pillar-cards-container">
                      { 
                      Pillar_Data.map((item, index) =>
                         <PillarCard key={index} icon={item.icon} title={item.title} description={item.description} />
                      )
                      }
                    </div>
                </div>
                <div className="business-expansion-container">
                    <p className="business-expansion-title">How Do We Facilitate Business Expansion?</p>
                    <p className="business-expansion-description">Let us help you optimize your business and make every step smoother, giving you peace of mind and a trusted partner in <br/>every mile. Discover how Driveefy can transform your experience?</p>
                    <div className="business-expansion-tab-container">
                        <TabSystem />
                    </div>
                </div>
                <div className="transform-operation-container">
                    <p className="transform-operation-title">Ready to Transform Your Fleet Operations?</p>
                    <p className="transform-operation-description"> Let us help you transform your operations and build a better future for your business.</p>
                    <button className="transform-operation-button">Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Home
