import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        
        width: "70%",
        margin: "auto",
        marginBottom : "15px",
        backgroundColor : "#f1f1f1",
        color : "#555"

    },
     
    details: {
        display: 'flex',
        flexWrap :"nowrap",
        width: "80%",
        margin: "auto",
        
    },

    cover: {
        width: "40%",
        margin: "auto auto",
        padding: "0px",
        
    },
    
    content: {
        width: "60%"
    },
    idbutton: {
        fontSize: "25px",
        borderRadius: "40%",
        padding: " 30px",
        borderColor: "white",
        backgroundColor: "#F50057",

    }

}));