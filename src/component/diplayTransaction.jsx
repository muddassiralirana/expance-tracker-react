import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteIcon from '@mui/icons-material/Delete';

const useStyle = makeStyles({

    list:{
        marginTop:20,
        border:"1px solid black"
    }
})


const DisplayTransaction = ({transaction,deleteTransaction})=>{

    const clasess=useStyle()
    const color=transaction.amount >=0 ? "Green" : "Red";
    const sign= transaction.amount >= 0 ? "₨" : "-₨";
    const amount=sign + Math.abs( transaction.amount);
    return(
        <div>
          <ListItem className={clasess.list} style={{background: `${color}`, color:"white" }} >
              <ListItemIcon>
                  <DeleteIcon onClick={()=> deleteTransaction(transaction.id)} />
              </ListItemIcon>
        
              <ListItemText primary={transaction.text} />
              <ListItemText primary={amount } />
          </ListItem>
        </div>

    )
}

export default DisplayTransaction;