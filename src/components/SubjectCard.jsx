import "./SubjectCard.css"
const SubjectCard = ({subjectInfo})=>{

    return(
        <div className="container  row justify-content-center mt-3">
            <div className="row text-center subject-card-holder col-6">
                <span className="col-12 mt-2 fw-bold">{subjectInfo.name}</span>
                <div className="col-12 justify-content-center mb-3 mt-3">
                    <a className="lab-res-link" href={subjectInfo.link}>Посмотреть</a>
                </div>
                
            </div>
            
        </div>
    )
}


export default SubjectCard