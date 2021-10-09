import{Typography,Box} from "@mui/material"
import { makeStyles } from '@mui/styles';

const useStyle=makeStyles({
    balance:{
        fontSize:35,
        marginBottom:20
    }
})

const Balance=({transactions})=>{
    const clasess=useStyle();
   var amount= transactions.map(transaction => transaction.amount);
    const total=amount.reduce((amount, item) => (amount+=item),0 ).toFixed(2);
    return(
        <Box>
            <Typography className={clasess.balance}>
                Balance ₨ {total}
            </Typography>
        </Box>
    )
}

export default Balance;