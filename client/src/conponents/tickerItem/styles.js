import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    listItem: {
        borderTop: '1px solid #dadce0',
    },
    link: {
        textDecoration: 'none',
        height:         '48px',
    },
    listItemInner: {
        height:    '48px',
        '&:hover': {
            background: '#eaebec',
        },
    },
    tickerWrap: {
        display:         'inline-block',
        width:           '47px',
        height:          '20px',
        margin:          '0 15px',
        borderRadius:    '4px',
        backgroundColor: 'rgb(213, 94, 0)',
    },
    ticker: {
        display:        'flex',
        letterSpacing:  '.07272727em',
        fontSize:       '.6875rem',
        lineHeight:     '1rem',
        textTransform:  'uppercase',
        boxAlign:       'center',
        alignItems:     'center',
        boxPack:        'center',
        justifyContent: 'center',
        fontWeight:     'bold',
        height:         '22px',
        color:          'white',
    },
});
