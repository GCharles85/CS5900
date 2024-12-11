import List from './List';

function App(){
  const fruits = [{id:1, name:'apple', calories:90},
                  {id:2, name:'banana', calories:99},
                  {id:3, name:'grapes', calories:45},
                  {id:4, name:'orange', calories:45},
                  {id:5, name:'mango', calories:60}]

  const vegetables = [{id:6, name:'potatoes', calories:77},
                      {id:7, name:'tomatoes', calories:118},
                      {id:8, name:'carrots', calories:41},
                      {id:9, name: 'spinach', calories:23},
                      {id:10, name:'broccoli', calories:90}]

  return(
    <>
      <List items={fruits} category="fruits"/>
    </>);
}

export default App