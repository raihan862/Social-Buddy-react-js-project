import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {   
        width: "60%",
        margin: "auto",
        marginBottom : "15px",
        backgroundColor : "#333",
        color : "#fff",
    },
     
    deatils: {
        display: "flex",
        width: "80%"
    },

    cover: {
        width:"60px",
        padding: "10px"
    }
    
   
     
}));