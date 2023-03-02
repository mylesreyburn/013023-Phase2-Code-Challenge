import React from "react";
import Transaction from "./Transaction";

function TransactionsList( { serverData, searchQuery } ) {

  console.log(serverData)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {serverData.filter( (item) => {
          if(item === "") return true

          return (item.description.toLowerCase().includes(searchQuery.toLowerCase()))
        }).map((item) => {
          return(
            <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount}/>
          )
        })}
        
      </tbody>
    </table>
  );
}

export default TransactionsList;
