import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Guilherme" sobrenome="Moreira">
      <Filho nome="First"/>
      <Filho nome="Second"/>
      <Filho nome="Third"/>
    </Pai>
  </div>, document.getElementById('root')
)
