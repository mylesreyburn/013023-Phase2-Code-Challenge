import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [importedServerData, setImportedServerData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  // const [updateFlag, setUpdateFlag] = useState(true)

  useEffect( () => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setImportedServerData(data)
      })
    }, [])

  function submitNewTransaction(input){
    fetch("http://localhost:8001/transactions", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
    .then(response => response.json())
    .then((data) => {setImportedServerData([...importedServerData, data])})
    .then(console.log(importedServerData))
    // .then(setUpdateFlag(!updateFlag))
  }

  function handleUpdateSearchQuery(event){
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Search onChangeSearchQuery={handleUpdateSearchQuery}/>
      <AddTransactionForm transactionFunction={submitNewTransaction}/>
      <TransactionsList serverData={importedServerData} searchQuery={searchQuery} />
    </div>
  );
}

export default AccountContainer;
