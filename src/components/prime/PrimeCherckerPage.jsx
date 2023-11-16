import { useEffect, useState } from "react"
import "./PrimeChecker.css"
import $ from 'jquery'
const PrimeCheckerPage = () =>{

    const[answer, setAnswer] = useState("")

    const fetchCheckPrime = ()=>{
        var request = $("#num_inp").val()
        if($("#rounds_inp").val() != ""){
            request += `_${$("#rounds_inp").val()}`
        }
        
        $.get(`http://localhost:8080/isPrime?line=${request}`,
        function(data){
            setAnswer(`${data["num"]}${data["rounds"]==null?"":" раунды: " + data["rounds"]} ${data["answer"]}`)
        });

        $("#isPrimeAnswer").removeClass("answer-field-hidden")
    }

    const[file, setFile] = useState(null)
    useEffect(()=>{
        $('.input-file input[type=file]').on('change', function(){
            let file = this.files[0];
            setFile(file)
            $(this).next().html(file.name);
        });
    })

    const fetchPrimeForFile = async () =>{
        var formData = new FormData()
        console.log(file)
        
        formData.append('file', file)

        await fetch("http://localhost:8080/arePrime",{
            body: formData,
            method:"post"
        }).then(response =>{
            console.log(response)
        })
        // $.ajax({
        //     url:"http://localhost:8080/arePrime",
        //     data: formData,
        //     type:"post",
        //     contentType: false, 
        //     processData: false,
        //     enctype:"multipart/form-data"
        // })
    }

    return(
        <div id="primeCheckPage">
            <a href="/" className="return-to-main-btn">&larr; Вернуться на главную</a>

            <h4 className="mt-3 text-center" style={{color:"#fcfbfc"}}>Проверка числа на простоту</h4>

            <div className="container mt-5 prime-check-container">
                <div className="row justify-content-center mx-auto">
                    <div className="col-12">
                        <div className="col-12 text-center">
                            <span className="fw-bold" style={{color:"#fcfbfc"}}>Введите число и (если хотите) количество раундов</span>
                        </div>
                        
                        <div className="col-12 row justify-content-center mx-auto mt-3">
                            <input id="num_inp" type="number" placeholder="число" className="col-4 arg-inp"/>
                            <input id="rounds_inp" type="number" placeholder="раунды" className="col-4 arg-inp"/>
                        </div>

                        <div className="col-12 answer-field-hidden" id="isPrimeAnswer">
                            <span className="text-wrap" style={{color:"#fcfbfc"}}>{answer}</span>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                            <button className="btn calculate-btn" onClick={fetchCheckPrime}>
                                Проверить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr size="4" className="mt-5"/>
            <h4 className="mt-3 text-center" style={{color:"#fcfbfc"}}>Проверка чисел из текстового файла</h4>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div id="file_nums_form" className="col-12 file_inp_container mt-5">
                            <div className="col-12 mt-3 mb-3">
                                <span className="text-wrap fw-bold" style={{color:"#fcfbfc"}}>Выберите файл</span>
                            </div>

                            <label className="input-file">
                                <input id="file_inp" type="file" name="file"/>		
                                <span>Выберите файл</span>
                            </label>
                            
                            <div className="col-12 mt-3 mb-3">
                                <button className="btn calculate-btn" onClick={fetchPrimeForFile}>
                                    Проверить числа из файла
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 row answers_container">
                        <div className="col-3">

                        </div>

                        <div className="col-3">

                        </div>

                        <div className="col-3">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrimeCheckerPage