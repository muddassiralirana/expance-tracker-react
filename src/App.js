import "./App.css";
import { Typography, Box } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Balance from "./component/balance";
import ExpanceCard from "./component/expanceCard"
import NewTransaction from "./component/newTransaction";
import Transaction from "./component/transaction";
import { useState } from "react";

const useStyle = makeStyles({
  header: {
    color: "blue",
    fontSize: 35,
    margin: "10px 0",
    textTransform: "uppercase"
  },
  component: {
    background: "#FFF",
    width: 800,
    padding: 10,
    borderRadius: 20,
    display:"flex",
    "& > *":{
      width:"50%",
      padding:10,
      height:'70vh'
    }
  }
})



function App() {
  const classes = useStyle();
  const [transactions,setTransactions]=useState([
    {id:1,text:"momo",amount:-20},
    {id:2,text:"dd",amount:20},
    {id:3,text:"momo",amount:-20},
    {id:4,text:"momo",amount:-20},
  ])

  var deleteTransaction=(id)=>{
    setTransactions(transactions.filter(Transaction => Transaction.id !== id));
  }
  const addTransaction=(transaction)=>{
    setTransactions(transactions => [transaction, ...transactions])
  }

  return (
    <main className="App">
      <div>

        <Typography className={classes.header} variant="h3" component="div" gutterBottom>
          Expance Tracker
        </Typography >
        <Box className={classes.component}>
          <Box>
            <Balance transactions={transactions} />
            <ExpanceCard transactions={transactions} />
            <NewTransaction addTransaction={addTransaction} />
          </Box>

          <Box>
            <Transaction transactions={transactions} deleteTransaction={deleteTransaction} />
          </Box>
        </Box>
      </div>

    </main>
  )

}

export default App;