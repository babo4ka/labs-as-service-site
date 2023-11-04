import "./Header.css"

const Header = () =>{

    return(
        <div className="container-fluid header">
            <div className="row">
                <div className="col-8 row">
                    <div className="info-field">
                        <span>Иванов Евгений Александрович</span>
                        <span id="group-info">Группа 09-151, 3 курс</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header