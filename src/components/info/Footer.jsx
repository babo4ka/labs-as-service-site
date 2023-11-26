import "./Footer.css"
import contacts from "../contacts.json"

const Footer = () =>{

    return(
        <div className="container-fluid footer" id="footer">
            <div className="row align-items-center mt-5">
                <div className="col-10">
                    <h2>Иванов Евгений Александрович<br/></h2>
                    <span className="fw-bold">3 курс КФУ</span>
                </div>

                <div className="col-2 contacts row text-center">
                    {/* <div className="col-12 contact-line"> */}
                        <span className="fw-bold contact-link contact-line col-12">{contacts.phone}</span>
                    {/* </div> */}

                    {/* <div className="col-12 contact-line"> */}
                        <a href={contacts.tg} className="fw-bold contact-link contact-line col-12">Телеграм</a>
                    {/* </div> */}

                    {/* <div className="col-12 contact-line"> */}
                        <a href={contacts.vk} className="fw-bold contact-link contact-line col-12">Вконтакте</a>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer