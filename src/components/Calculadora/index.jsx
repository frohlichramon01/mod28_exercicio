import {useState} from 'react'

const Calculadora = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculaImc = () => {
        const alturaQuadrado = altura*altura;
        const imc = parseFloat(peso / alturaQuadrado).toFixed(2);
        let resultado = 'vazio'

        if ((parseFloat(imc) < 17)){
            resultado = 'Muito abaixo do peso';
        } else if ((imc >= 17 && imc < 18.5)){
            resultado = 'Abaixo do peso';
        } else if ((imc >= 18.5 && imc < 24.5)){
            resultado = 'Peso normal';
        } else if ((imc >= 24.5 && imc < 30)){
            resultado = 'Acima do peso';
        } else if ((imc >= 30 && imc < 35)){
            resultado = 'Obesidade Grau I';
        } else if ((imc >= 35 && imc < 40)){
            resultado = 'Obesidade Grau II';
        } else if (imc > 40){
            resultado = 'Obesidade Grau III';
        }

        return (<strong>
                Resultado: {resultado}
                </strong>)
    }


    return (
        <>
            <form>
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className="col-3 align-self-center">
                            <label className='form-label' htmlFor="altura"><strong>Altura:</strong></label>
                            <input className='form-control text-center' id="altura" type="number" min="0" max="3" placeholder="Altura em metros" onBlur={evento => setAltura(parseFloat(evento.target.value))}/>
                        </div>
                    </div>
                    <div className='row justify-content-center mt-3'>
                    <div className="col-3 align-self-center">
                            <label className='form-label' htmlFor="peso"><strong>Peso:</strong></label>
                            <input className='form-control text-center' id="peso" type="number" min="0" max="300" placeholder="Peso em quilogramas" onBlur={evento => setPeso(parseFloat(evento.target.value))}/>
                            </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <p className="mt-5">
                        <strong>{altura > 0 && peso > 0 ? calculaImc() : <p><strong>IMC:</strong> </p>}</strong>
                    </p>
                </div>
            </form>
            
       </>
    )
}

export default Calculadora