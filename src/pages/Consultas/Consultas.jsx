import React from 'react'
import { Link } from 'react-router-dom'
import { ConsultasStyle } from './Consultas.Style'
import { ConsultasMap } from '../../Objects.API/Consultas.Map'

export default function consultas() {
  const consultas = ConsultasMap
  return (
    <ConsultasStyle>
      <div id="background" />
        <section>
          {consultas.map((consulta, index) => {
            return (
              <div key={index}>
                <h3>{consulta.name}</h3>
                <img src={consulta.image} alt="" />
                <button>
                  <Link to={`/contact/${consulta.name}`}>Saiba mais</Link>
                </button>
              </div>
            )
          })}
        </section>
    </ConsultasStyle>
  )
}
