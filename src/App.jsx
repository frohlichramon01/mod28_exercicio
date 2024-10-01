import { useState } from 'react'
import Calculadora from './components/Calculadora'

function App() {
  return (
    <>
      <div className="container text-center">
        <h1>Calculadora de IMC</h1>
        <hr />
        <Calculadora />
        <hr />
      </div>
      

      <div className="container mt-5 p-5 tabela">
      <table className="table table-striped table-bordered text-center">
        <caption className="text-center">Índice de Massa Corporal</caption>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Menor que 16,99</td>
            <td>Muito abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 17 de 18,49</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 18,5 e 24,99</td>
            <td>Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 29,99</td>
            <td>Acima do peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 34,99</td>
            <td>Obesidade Grau I</td>
          </tr>
          <tr>
            <td>Entre 35 e 39,99</td>
            <td>Obesidade Grau II</td>
          </tr>
          <tr>
            <td>Acima de 40</td>
            <td>Obesidade Grau III</td>
          </tr>
        </tbody>
      </table>
      </div>

    </>
  )
}

export default App
