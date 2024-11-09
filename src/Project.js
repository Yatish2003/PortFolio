import "./Projects.css"

function Projects(){
    return(
        <>
            <div className="project-main">
                <h1>My Projects</h1>
                <div className="card-content">
                    <div className="project-cards">
                        <img src="home page.png"/>
                        <h2 id="project-name">Event Managenment Project</h2>
                        <p className="description">Technology Used:Html,Css,Js & Python,djngo</p>
                    </div>
                    <div className="project-cards">
                        <img src="perfume.png"/>
                        <h2 id="project-name">Perfume website</h2>
                        <p className="description">Technology Used:Html,Css,Js & PHP</p>
                    </div>
                    <div className="project-cards">
                        <img src="bootStrap.png"/>
                        <h2 id="project-name">Tourist website</h2>
                        <p className="description">Technology Used:BootStrap & PHP</p>
                    </div>
                    <div className="project-cards">
                        <img src="Tshirt.png"/>
                        <h2 id="project-name">Tshirt website</h2>
                        <p className="description">Technology Used:Html,Css,Js</p>
                    </div>
                    <div className="project-cards">
                        <img src="BlogWritter.png"/>
                        <h2 id="project-name">BLog Writting</h2>
                        <p className="description">Technology Used:Html,Css,Js & PHP</p>
                    </div>

                    <div className="project-cards">
                        <img src="AmazonClone.png"/>
                        <h2 id="project-name">Amazon Clone</h2>
                        <p className="description">Technology Used:Html,Css</p>
                    </div>


                </div>
            </div>
            <hr></hr>
        </>
    )
}
export default Projects;