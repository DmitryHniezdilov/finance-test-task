import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    pageLayout: {
        backgroundColor: 'inherit',
        display:         'flex',
        flexDirection:   'column',
        minHeight:       '100vh',
    },
    container: {
        flexGrow: '1',
    },
    footer: {
        flexShrink: '0',
    },
});
