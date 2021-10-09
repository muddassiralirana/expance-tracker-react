import { Typography ,Divider,List} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import DisplayTransaction from "./diplayTransaction";


const useStyle=makeStyles({
    component:{
        "& > *":{
            marginBottom:10
        }

    }
})
const Transaction =({transactions,deleteTransaction})=>{
    var clasess=useStyle()
    return(
        <Box className={clasess.component}>
            <Typography variant="h4">Transaction Hihstory</Typography>
            <Divider/>
            <List>
                {
                transactions.map(transaction =>{
                    return <DisplayTransaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
                })
                }
            </List>
        </Box>
    )
}

export default Transaction;