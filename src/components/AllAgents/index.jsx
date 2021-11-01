import { useState,useEffect } from "react"
import * as S from "./styles"

/* Components  */
import { SectionTitle, AgentCard, InputSearch, AgentNotFound } from "components"

/* Services */
import { getAllAgents } from "services/api"

const AllAgents = () => {

  const [agents, setAgents] = useState([])
  const [targetAgent, setTargetAgent] = useState('')

  function searchAgent(e) {
    setTargetAgent(e.target.value)
  }

  useEffect(() => {
   (async ()=> {
    const agentsRespone = await getAllAgents()
    const { data } = agentsRespone
    setAgents(data)
   })()
  }, [])

  const filterAgent = agents.filter(({name}) => name.toLowerCase().includes(targetAgent.toLowerCase()))

  const renderAgents = filterAgent.length !== 0

  return (
   <>
    <S.Container>
      <SectionTitle color="#444444">Agentes</SectionTitle>
      <InputSearch onChange={e => searchAgent(e)} />
      {!renderAgents && <AgentNotFound />}
      <S.ContainerAgents>
        {filterAgent.map(({id, name, image}) => <AgentCard key={id} name={name} image={image}/>)}
      </S.ContainerAgents>
    </S.Container>
   </>
  )
}

export default AllAgents