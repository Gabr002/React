import { useEffect, useState } from "react"

const tarefas = [
  {id: '1', title:'Minha primeira tarefa'},
  {id: '2', title:'Minha segunda tarefa'},
  {id: '3', title:'Minha terceira tarefa'}
]

function App(){

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
      async function buscarDados(){
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resultEnd = await result.json();
        return resultEnd;
      }
      buscarDados().then(res => setTarefas(res))
  }, []);

  return (
    <div>
      <h1>Buscando dados</h1>
        <ol>
            {tarefas.map((tarefa) => {
              return(
              <div>
                <li key={tarefa.id}>
                  {tarefa.title}
                  {tarefa.completed ? '- Tarefa Concluída' : null}
                </li>
              </div>
              )
            })}
        </ol>
    </div>
  );
}

export default App;