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
            resultado = 'Obesidade I';
        } else if ((imc >= 35 && imc < 40)){
            resultado = 'Obesidade II';
        } else if (imc > 40){
            resultado = 'Obesidade III';
        }

        return resultado
        
    }


    return (
        
            <form>
                <div>
                    <label htmlFor="altura">Altura: </label>
                    <input id="altura" type="number" min="0" max="3" placeholder="Altura em metros" onBlur={evento => setAltura(parseFloat(evento.target.value))}/>
                </div>
                <div>
                    <label htmlFor="peso">Peso: </label>
                    <input id="peso" type="number" min="0" max="300" placeholder="Peso em quilogramas" onBlur={evento => setPeso(parseFloat(evento.target.value))}/>
                    </div>
                {altura > 0 && peso > 0 ? calculaImc() : <p>IMC: </p>}
                

                
            </form>
       
    )
}

export default Calculadora