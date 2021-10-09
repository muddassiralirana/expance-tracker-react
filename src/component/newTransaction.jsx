import { Box } from "@mui/system";
import { Typography,TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

var useStyle=makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
        // "& > *":{
        //     marginTop:30
        // }

    },
    MarginTop:{
        marginTop:"30px"
    },
   
})


var NewTransaction=({addTransaction})=>{
    var clasess=useStyle()
    var[text,setText] = useState("")
    var[amount,setAmount] = useState()

    var newTransaction=()=>{
        const transaction={
            id:Math.floor(Math.random()*10000),
            text:text,
            amount: +amount

        }
        addTransaction(transaction);
    }

     
    return(
        <Box className={clasess.container} >
            <Typography variant="h4" >New Transaction</Typography>
            <TextField  label="Enter Expance" variant="standard" onChange={(e)=> setText(e.target.value)} />
            <TextField label="TOTAL Amount" variant="standard" onChange={(e)=> setAmount(e.target.value)} />
            <Button variant="contained" onClick={newTransaction} >Add New Transaction</Button>
        </Box>
    )
}

export default NewTransaction;