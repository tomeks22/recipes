import { React, Component } from 'react';
import { gsap } from "gsap" ;
import Auxilliary from '../../hoc/Auxilliary/Auxilliary';
import '../../css/main.css';
import cloud1 from '../../assets/cloud1.png';
import cloud2 from '../../assets/cloud2.png';
import cloud3 from '../../assets/cloud3.png';
import cloud4 from '../../assets/cloud4.png';
import cloud5 from '../../assets/cloud5.png';

class Layout extends Component {
    
    componentDidMount(){
        this.newMethod();
    };
    
    render () {
        return (
            <Auxilliary>
                <div className="banner">
                    <h2 className="big-text">Have Fun</h2>
                    <div className="clouds">
                        <img src={cloud1} style={{ '--i' : 1 }} alt="cloud1"/>
                        <img src={cloud2} style={{ '--i' : 2 }} alt="cloud2"/>
                        <img src={cloud3} style={{ '--i' : 3 }} alt="cloud3"/>
                        <img src={cloud4} style={{ '--i' : 4 }} alt="cloud4"/>
                        <img src={cloud5} style={{ '--i' : 5 }} alt="cloud5"/>
                    </div>
                </div>
                <div className="intro">
                    <div className="intro-text">
                        <h1 className="hide">
                            <span className="text">Spice Up Your Life</span>    
                        </h1>
                        <h1 className="hide">
                            <span className="text">With The Best Drinks</span>    
                        </h1>
                    </div>
                </div>
                <div className="slider"></div>
            </Auxilliary>
        );
    }

    newMethod() {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.to(".text", { y: "0%", duration: 1.7, stagger: 1 });
        tl.to(".slider", { y: "-100%", duration: 2, delay: 0.75 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
        tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
        tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
    }
}


export default Layout;

