import React from 'react'
import { Link } from 'react-router-dom'
import { ConsultasStyle } from './Consultas.Style'
import { ConsultasMap } from '../../Objects.API/Consultas.Map'
import { Background } from "../../components/index";


/**
 * Renders a list of consultations.
 *
 * @returns {JSX.Element} JSX elements representing a list of consultations.
 */
export default function consultas() {
  const consultas = ConsultasMap

  console.log(consultas)

  return (
    <ConsultasStyle>
      <Background />
      <section>
        {consultas.map((consulta, index) => {
          return (
            <div key={index}>
              <h3>{consulta.name}</h3>
              <img src={consulta.image} alt={consulta.name} />
              <button>
                <Link to={`/consultas/${index}`}>Saiba mais</Link>
              </button>
            </div>
          )
        })}
      </section>
    </ConsultasStyle>
  )
}
