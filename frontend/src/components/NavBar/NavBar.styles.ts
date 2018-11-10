import { style } from 'typestyle';

export default class Styles {
    public nav = style({
        color: '#fff'
    });
    public logo = style({
        height: '2.5em',
        width: 'auto',
    });
    public main = style({
        alignItems: 'center',
        background: '#0000009e',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '.5em 3em',
    });
    public ul = style({
        listStyle: 'none',
        padding: '0 2em'
    });
    public item = style({
        display: 'inline',
        padding: '1em'
    });
    public link = style({
        color: '#fff',
        textDecoration: 'none'
    });
}