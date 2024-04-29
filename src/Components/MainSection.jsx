import React from 'react'
import { Data } from '../Assets/Data'

export default function MainSection() {
    // const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <section class="_hooks-grid_1fp8c_1">
   
    <ul class="_hooks-list_1fp8c_12">
     
      {Data.map((e)=>(<li key={e.id} class="_hook_1wx7b_1">
        <a href={e.title}>
          <h3 class="_card-title_1wx7b_16">{e.title}</h3>
          <p class="_card-description_1wx7b_24">{e.description}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>))}
    </ul>
  </section>
  )
}
