import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이중혁',
  'birthday': '991108',
  'gender': '남자',
  'job': 'soldier'
},
{
'id': 2,
'image': 'https://placeimg.com/64/64/2',
'name': '이중혁',
'birthday': '991103',
'gender': '남자',
'job': 'programmer'
},
{
'id': 3,
'image': 'https://placeimg.com/64/64/3',
'name': '이중혁',
'birthday': '991101',
'gender': '남자',
'job': 'soldier'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c=>{ return (<Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>);})}
      </div>
    );
  }
}

export default App;
