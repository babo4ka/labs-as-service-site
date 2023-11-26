import "./Footer.css"
import contacts from "../contacts.json"

const Footer = () =>{

    return(
        <div className="container-fluid footer" id="footer">
            <div className="row align-items-center mt-5">
                <div className="col-12 col-md-10 text-center text-md-start" id="name_dupl">
                    <h2>Иванов Евгений Александрович<br/></h2>
                    <span className="fw-bold">3 курс КФУ</span>
                </div>

                <div className="col-12 col-md-2 contacts row text-center justify-contenr-center mx-auto">
                    <span className="fw-bold contact-link contact-line col-12">{contacts.phone}</span>
                    <a href={contacts.tg} className="fw-bold contact-link contact-line col-12">Телеграм</a>
                    <a href={contacts.vk} className="fw-bold contact-link contact-line col-12">Вконтакте</a>
                </div>
            </div>
        </div>
    )
}

export default Footer