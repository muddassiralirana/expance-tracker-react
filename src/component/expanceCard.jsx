import { Card, CardContent, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';


const useStyle=makeStyles({
    container:{
        display:"flex",
        "&>*":{
            padding:10,
            flex:1
        }
    },
    incom:{
        color:"green"
    },
    expance:{
        color:"red"
    }
})



const ExpanceCard = ({transactions}) => {

const clasess=useStyle();
const amount = transactions.map(transaction => transaction.amount );
const income= amount.filter(item => item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
const expance= (amount.filter(item => item<0).reduce((acc,item)=>(acc+=item),0)*-1 ).toFixed(2);

    return (
        <Box className={clasess.container}>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography className={clasess.incom}>₨ {income}</Typography>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Typography>Expence</Typography>
                    <Typography className={clasess.expance}>₨ {expance}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}


export default ExpanceCard;