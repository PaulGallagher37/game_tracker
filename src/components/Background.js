
import background1 from "../images/background1.jpg"
import background2 from "../images/background2.jpg"
import background3 from "../images/background3.jpg"
import background4 from "../images/background4.jpg"
import background5 from "../images/background5.jpg"
import background6 from "../images/background6.jpg"

let backgrounds = [background1, background2, background3, background4, background5, background6];

let randomNum = Math.floor(Math.random() * backgrounds.length)


function Background() {


    return (
        <div className="background">
            <img src={backgrounds[randomNum]} width="100%" height="100%"></img>
        </div>
    )
};

export default Background;