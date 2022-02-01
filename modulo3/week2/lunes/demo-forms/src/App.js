import {useState} from 'react'
import './App.css';
import {Input,Select,Checks} from './components'
function App() {
  const [data,setData] = useState({});

  const handleChange = (e)=>{
    const {name,value} = e.target
    setData(prevState => {
      return {...prevState, [name]:value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("lo que se guardo en el DAta:",data)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <fieldset className="uk-fieldset">

              <legend className="uk-legend">Legend</legend>

              {/* Basic Input */}
              <Input 
                placeholder="Input Basic"
                name="basicInput"
                onChange={handleChange}
              />
              {/* Select */}
              <Select
                options={[
                  {name:'Mango',value:'1'},
                  {name:'Kevin',value:'2'},
                  {name:'Jax',value:'3'},
                  {name:'Kikis',value:'4'}
                ]}
                onChange={handleChange}
                name="select"
              />
              {/* TextArea */}
              <Input
                textArea
                placeholder="Soy un TextArea :D"
                rows={10}
                onChange={handleChange}
                name="textArea"
              />
                {/* Radio */}
                <Checks
                  radio
                  optionA="M"
                  optionB="F"
                  name="gender"
                  onChange={handleChange}

                />
                {/* CheckBox */}
                <Checks
                  name="category"
                  options={[
                    {name:"Tacos",value:1},
                    {name:"Arepas",value:2},
                    {name:'pizza',value:3}]}
                    onChange={handleChange}

                />

              <div className="uk-margin">
                  <input 
                    className="uk-range" 
                    type="range" 
                    defaultValue="2" 
                    min="0" 
                    max="10" 
                    step="0.1" 
                    name="range"
                    onChange={handleChange} />
              </div>

          </fieldset>
          <button className="uk-button uk-button-default" type="submit">Button</button>
      </form>
    </div>
  );
}

export default App;
