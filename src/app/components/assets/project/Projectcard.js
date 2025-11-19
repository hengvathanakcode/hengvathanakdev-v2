import apip from "../../../../db/project/Date.js";

function Projectcard() {
    return (
        <div className="py-3">
            <div className="px-2">
                <div className="row">
                    {apip.map((project, index) => (
                        <div className="col-lg-6 col-md-6 col-12 mb-4" key={index}>
                            <div className="card-project">
                                <div className="card-body p-0">

                                    <div>
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="project-img" 
                                        />
                                    </div>

                                    <div className="px-2 py-2">
                                        <div className="pb-2">
                                            <span className="font-s-10 text-dark font-w-600 project-title">
                                                {project.type}
                                            </span>
                                        </div>

                                        <p className="font-s-14 font-w-700 m-0">{project.title}</p>

                                        <p className="font-s-10 font-w-600 text-secondary m-0">
                                            {project.description}
                                        </p>
                                        <div className="project-skill-container">
                                            {project.skills?.map((skill, skillIndex) => (
                                                <div key={skillIndex}>
                                                    <p className="project-skill font-s-10 font-w-600 m-0">
                                                        {skill}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projectcard;
