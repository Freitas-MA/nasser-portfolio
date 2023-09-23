import React from 'react'
import { ConsultasStyle } from './Consultas.Style'
import { ConsultasMap } from '../../Objects.API/Consultas.Map'

export default function consultas() {
  const consultas = ConsultasMap
  return (
    <ConsultasStyle>
        {consultas.map((consulta, index) => {
          return (
            <div key={index}>
              <h3>{consulta.name}</h3>
              <img src={consulta.image} alt="" />
            </div>
          )
        })}
    </ConsultasStyle>
  )
}
