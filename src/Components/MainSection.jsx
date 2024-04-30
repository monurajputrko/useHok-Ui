import { Link } from "react-router-dom";


export default function MainSection({data}) {
  return (
    <section className="_hooks-grid_1fp8c_1">
   
    <ul className="_hooks-list_1fp8c_12">
     
      {data.map((e)=>(<li key={e.id} className="_hook_1wx7b_1">
        <Link to={`/${e.title}`}>
          <h3 className="_card-title_1wx7b_16">{e.title}</h3>
          <p className="_card-description_1wx7b_24">{e.description}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </Link>
      </li>))}
    </ul>
  </section>
  )
}
