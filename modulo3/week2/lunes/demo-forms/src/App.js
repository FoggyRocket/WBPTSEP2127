import logo from './logo.svg';
import './App.css';
import {Input,Select,Checks} from './components'
function App() {
  return (
    <div className="App">
      <form>
          <fieldset className="uk-fieldset">

              <legend className="uk-legend">Legend</legend>

              {/* Basic Input */}
              <Input 
                placeholder="Input Basic"
                disabled={true}
              />
              {/* Select */}
              <Select
                options={[
                  {name:'Mango',value:'1'},
                  {name:'Kevin',value:'2'},
                  {name:'Jax',value:'3'},
                  {name:'Kikis',value:'4'}
                ]}
                disabled
              />
              {/* TextArea */}
              <Input
                textArea
                placeholder="Soy un TextArea :D"
                rows={10}
              />
                {/* Radio */}
                <Checks
                  radio
                  optionA="M"
                  optionB="F"
                  name="gender"
                />
                {/* CheckBox */}
                <Checks
                  name="category"
                  options={[
                    {name:"Tacos",value:1},
                    {name:"Arepas",value:2},
                    {name:'pizza',value:3}]}
                />

              <div className="uk-margin">
                  <input className="uk-range" type="range" defaultValue="2" min="0" max="10" step="0.1" />
              </div>

          </fieldset>
      </form>
    </div>
  );
}

export default App;
