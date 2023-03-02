import React, { useState } from "react";

function AddTransactionForm( {transactionFunction} ) {

  const [newTransaction, setNewTransaction] = useState({})

  function changeInfo(event){
    const inputName = event.target.name
    const inputValue = event.target.value
    const tempObject = {...newTransaction}
    tempObject[inputName] = inputValue
    setNewTransaction(tempObject)
    console.log(newTransaction)
  }

  function submitNewTransaction(event){
    event.preventDefault()
    transactionFunction(newTransaction)
    setNewTransaction({})
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitNewTransaction}>
        <div className="inline fields">
          <input type="date" name="date" value={newTransaction.date} onChange={changeInfo}/>
          <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={changeInfo}/>
          <input type="text" name="category" placeholder="Category" value={newTransaction.category} onChange={changeInfo}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={newTransaction.amount} onChange={changeInfo}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
