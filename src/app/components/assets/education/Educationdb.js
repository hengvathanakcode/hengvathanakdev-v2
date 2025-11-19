const Educationdb = (props) => {
    const { link, image, title, description, date } = props;

    return (
        <>
            <div className='mt-4'>
                <div className='d-flex align-items-center justify-content-between mb-4 apie-card'>
                    <a href={link} className='text-decoration-none text-dark d-flex align-items-lg-center align-items-md-center align-items-start gap-3'>
                        <div className="">
                            <img src={image} alt={title} className="education-img" />
                        </div>
                        <div className="">
                            <p className="font-s-14 font-w-600 m-0">{title}</p>
                            <p className="font-s-12 font-w-700 m-0 space-font text-secondary">{description}</p>
                            <p className="font-s-10 font-w-500 m-0">{date}</p>
                        </div>
                    </a>
                    <div className='read-hover d-lg-block d-md-none d-none'>
                        <i class="bi bi-chevron-right font-w-700"></i>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Educationdb;