import { style } from 'typestyle';

export default class Styles {
    public secret = style({
        visibility: 'hidden',
    });
    public code = style({
        width: '100%',
    });
    public grid= style({
        display: 'grid',
        gridTemplateColumns: '10% 90%',
        width: '100%',
    });
    public live = style({
        float: 'right',
        gridColumn: '2',
    });
    public side = style({
        background: '#1f1f1f',
        borderRight: '.3em #7463e8 solid',
        color: '#fff',
    });
    public files = style({
        listStyle: 'none',
    });

}