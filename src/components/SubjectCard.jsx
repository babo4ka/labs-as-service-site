import "./SubjectCard.css"
const SubjectCard = ({subjectInfo})=>{

    return(
        <div className="container subject-card-holder mt-3 col-4">
            <div className="row text-center">
                <span className="col-12 mt-2 fw-bold">{subjectInfo.name}</span>
                <div className="col-12 justify-content-center mb-3 mt-3">
                    <a className="lab-res-link" href={subjectInfo.link}>Посмотреть</a>
                </div>
                
            </div>
            
        </div>
    )
}


export default SubjectCard