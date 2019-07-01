import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[{"name":"Hussain","test_name":"d- and f-BLOCK ELEMENTS","score":"10","type":"JEE","duration_in_min":"60","user_id":"99","test_ques":"30","per_ques_score":"4"},{"name":"Mustansir","test_name":"d- and f-BLOCK ELEMENTS","score":"15","type":"JEE","duration_in_min":"60","user_id":"101","test_ques":"30","per_ques_score":"4"},{"name":"Hardit Sabharwal","test_name":"d- and f-BLOCK ELEMENTS","score":"58","type":"JEE","duration_in_min":"60","user_id":"102","test_ques":"30","per_ques_score":"4"},{"name":"Kavach dave","test_name":"d- and f-BLOCK ELEMENTS","score":"9","type":"JEE","duration_in_min":"60","user_id":"103","test_ques":"30","per_ques_score":"4"},{"name":"Harsh Mistry","test_name":"d- and f-BLOCK ELEMENTS","score":"-4","type":"CET","duration_in_min":"60","user_id":"105","test_ques":"30","per_ques_score":"4"},{"name":"Kushaan Choksi","test_name":"d- and f-BLOCK ELEMENTS","score":"5","type":"JEE","duration_in_min":"60","user_id":"106","test_ques":"30","per_ques_score":"4"},{"name":"Ammar Netterwala","test_name":"d- and f-BLOCK ELEMENTS","score":"3","type":"NEET","duration_in_min":"60","user_id":"107","test_ques":"30","per_ques_score":"4"},{"name":"Riz lala","test_name":"d- and f-BLOCK ELEMENTS","score":"24","type":"NEET","duration_in_min":"60","user_id":"109","test_ques":"30","per_ques_score":"4"},{"name":"Kabeer","test_name":"d- and f-BLOCK ELEMENTS","score":"22","type":"JEE","duration_in_min":"60","user_id":"110","test_ques":"30","per_ques_score":"4"},{"name":"Mitanshu Kutty","test_name":"d- and f-BLOCK ELEMENTS","score":"5","type":"CET","duration_in_min":"60","user_id":"111","test_ques":"30","per_ques_score":"4"}],
      JEE:false,
      
    };
  }

  filterData= (e,key) =>{
    e.preventDefault()
    if(key==="score"){
      this.setState({
        data:this.state.data.sort((a,b)=>Number(a[key]) - Number(b[key]))
      })  
    }
    else{
    this.setState({
      data:
    this.state.data.sort((a,b)=>(a[key] > b[key]) ? 1 : ((b[key]  > a[key]) ? -1 : 0 ))
    })
    }
  }

 

  render() {
    const {data} = this.state;
    return (
      <div>
      <div>
      <table>
      <th onClick={(e)=>this.filterData(e,"name")}>Name</th>
      <th onClick={(e)=>this.filterData(e,"score")} >Score</th>
      <th onClick={(e)=>this.filterData(e,"test_name")}>Test Name</th>
      <th onClick={(e)=>this.filterData(e,"type")}>Type</th>
    {data.map((element,index)=>
      <tr >
      <td>{element.name}</td>
      <td>{element.score}</td>
      <td>{element.test_name}</td>
      <td>{element.type}</td>
      </tr>
    )}
      </table>
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
