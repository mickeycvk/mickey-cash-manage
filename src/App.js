import './App.css'
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent'
import React,{useState,useEffect} from 'react'
import DataContext from './data/DataContex'
import ReportComponent from './components/ReportComponent'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"




function App() {
  
  const [reportIncome,setReportIncome]=useState(0)
  const [reportExpense,setReportExpense]=useState(0)

  const [items,setItems]=useState([])
  const onAddNewItem=(newItem)=>{
      setItems((prevItem)=>{
    return [newItem,...prevItem]
  })
      
  }
  useEffect(()=>{
const amounts=items.map(items=>items.amount)
const income= amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
const expense=(amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)*-1) 
setReportIncome(income.toFixed(2))
setReportExpense(expense.toFixed(2))
console.log(income,expense)},[items,reportIncome,reportExpense])

  return (
  <DataContext.Provider value={{
    income:reportIncome,
    expense:reportExpense
  }}>
<div > 
<h1>Cash management</h1>
<img className="cat"src="https://placekitten.com/g/64/64"/>
<Router>
  <div>
  <ul className="menu">
    <li>
      <Link to="/">Show Total</Link>
    </li>
    <li>
      <Link to="/insert">Fill data</Link>
    </li>
  </ul>
  <Switch>
    <Route path="/" exact>
    <ReportComponent/>
    </Route>
    <Route path="/insert">
    <FormComponent onAddItem={onAddNewItem}/>

<Transaction items={items} />
    </Route>
  </Switch>
  </div>
</Router>




</div>
</DataContext.Provider>
)

}

export default App;
