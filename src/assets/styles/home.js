import { makeStyles } from "@material-ui/core/styles";

const useHomeStyles = makeStyles(theme => ({
    main: {
        maxWidth: 1300,
        margin: 'auto'
    },
    table: {
        marginTop: 30,
        position: 'relative'
    }
}));

export default useHomeStyles;