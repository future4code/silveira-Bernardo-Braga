   import React from 'react'
   import styled from 'styled-components'
   import './styles.css'

   const TarefaList = styled.ul`
      padding: 0;
      width: 200px;
   `

   const Tarefa = styled.li`
      text-align: left;
      text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
   `

   const InputsContainer = styled.div`
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
   `

   class App extends React.Component {
      state = {
         tarefas: [
            {
               id: Date.now(),
               texto: 'Texto da primeira tarefa',
               completa: false // Indica se a tarefa está completa (true ou false)
            },
            {
               id: Date.now(), // Explicação abaixo
               texto: 'Texto da segunda tarefa',
               completa: true // Indica se a tarefa está completa (true ou false)
            }
         ],
         inputValue: '',
         filtro: ''
      }


      componentDidUpdate(prevProps, prevState) {
         localStorage.setItem("id", this.state.tarefas.id);
         localStorage.setItem("texto", this.state.tarefas.texto);
         localStorage.setItem("completa", this.state.tarefas.completa);
      };

      componentDidMount() {
         const id = localStorage.getItem("id");
         const texto = localStorage.getItem("texto");
         const completa = localStorage.getItem("completa");

         // const obj = {
            
         // }

          this.setState({
            id: id || "",
            texto: texto || "",
            completa: completa || ""
         })


      };

      onChangeInput = (event) => {this.setState({inputValue: event.target.value})};

      onChangeFilter = (event) => {this.setState({filtro: event.target.value})};

      criaTarefa = () => {
         const novaTarefa = {
            id: Date.now(),
            texto: this.state.inputValue,
            completa:this.state.filtro
         }

         const novaTarefas = [...this.state.tarefas, novaTarefa]

         this.setState({tarefas:novaTarefas});
      }

      selectTarefa = (id) => {
         const tarefa = this.state.tarefas.map( (tarefas) => {

            if ( id === tarefas.id ) {
               const novaTarefa = {
                  ...tarefas,
                  completa: !tarefas.completa
               }
               return novaTarefa;
            }else{
               return tarefas
            }

         })

         this.setState({tarefas: tarefa});

      }

      render() {
         const listaFiltrada = this.state.tarefas.filter(tarefa => {
         
         switch (this.state.filtro) {
            case 'pendentes':
               return !tarefa.completa
            case 'completas':
               return tarefa.completa
            default:
               return true
         }
         })

         return (
         
         <div className="App">
            <h1>Lista de tarefas{ console.log(Date.now())}</h1>
            <InputsContainer>
               <input value={this.state.inputValue} onChange={this.onChangeInput}/>
               <button onClick={this.criaTarefa}>Adicionar</button>
            </InputsContainer>
            <br/>

            <InputsContainer>
               <label>Filtro</label>
               <select value={this.state.filtro} onChange={this.onChangeFilter}>
               <option value="">Nenhum</option>
               <option value="pendentes">Pendentes</option>
               <option value="completas">Completas</option>
               </select>
            </InputsContainer>
            <TarefaList>
               {listaFiltrada.map(tarefa => {
               return (
                  <Tarefa
                     completa={tarefa.completa}
                     onClick={() => this.selectTarefa(tarefa.id)}
                  >
                     {tarefa.texto}
                  </Tarefa>
               )
               })}
            </TarefaList>
         </div>
         )
      }
   }

   export default App
