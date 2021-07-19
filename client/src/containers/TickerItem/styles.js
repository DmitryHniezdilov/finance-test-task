import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    tableRow: {
        height:    '48px',
        borderTop: '1px solid #dadce0',
        cursor:    'pointer',
        '& td':    {
            borderBottom: 'none',
            padding:      '6px',
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
        alignItems:     'center',
        justifyContent: 'center',
        fontWeight:     'bold',
        height:         '22px',
        color:          'white',
    },
});
