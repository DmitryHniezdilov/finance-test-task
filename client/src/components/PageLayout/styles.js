import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    pageLayout: {
        backgroundColor: 'inherit',
        display:         'flex',
        flexDirection:   'column',
        minHeight:       '100vh',
    },
    container: {
        flexGrow:   '1',
        paddingTop: '24px',
    },
    footer: {
        flexShrink: '0',
    },
});
