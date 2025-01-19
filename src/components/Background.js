



function Background() {

    let backgrounds = ["one", "two", "three", "four"];

    let randomNum = Math.floor(Math.random() * backgrounds.length);

    let background = "background" + backgrounds[randomNum]


    return (
        <div>
            <img className={background} width="100%" height="100%"></img>
        </div>
    )
};

export default Background;