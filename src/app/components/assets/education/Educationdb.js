const Educationdb = (props) => {
    const { link, image, title, description, date } = props;

    return (
        <>
            <div className='mt-4'>
                <a href={link} className='text-decoration-none text-dark'>
                    <div className='d-flex align-items-center justify-content-between mb-4 apie-card'>
                        <div className="d-flex align-items-center gap-3">
                            <div className="">
                               <img src={image} alt={title} className="education-img" /> 
                            </div>
                            <div className="">
                                <p className="font-s-14 font-w-600 m-0">{title}</p>
                                <p className="font-s-10 font-w-500 m-0">{description}</p>
                                <p className="font-s-10 font-w-500 m-0">{date}</p>
                            </div>
                        </div>
                        <div className='read-hover'>
                            <i class="bi bi-chevron-right font-w-700"></i>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )

}

export default Educationdb;