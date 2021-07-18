import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core/styles';

const Chart = ({data}) => {
    const theme = useTheme();

    return (
        <ResponsiveContainer>
            <LineChart
                data = { data }
                margin = {{
                    top:    16,
                    right:  16,
                    bottom: 0,
                    left:   24,
                }}>
                <XAxis
                    dataKey = 'time'
                    stroke = { theme.palette.text.secondary }
                />
                <YAxis stroke = { theme.palette.text.secondary }>
                    <Label
                        angle = { 270 }
                        position = 'left'
                        style = {{ textAnchor: 'middle', fill: theme.palette.text.primary }}>
                        Sales
                    </Label>
                </YAxis>
                <Line
                    dataKey = 'amount'
                    dot = { false }
                    stroke = { theme.palette.primary.main }
                    type = 'monotone'
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

Chart.propTypes = {
    data: PropTypes.array,
};

export default Chart;
