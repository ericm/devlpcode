import { style } from 'typestyle';

export default class Styles {
    public nav = style({
        borderLeft: '.1em solid #ffffff75',
        color: '#fff',
        display: 'inline-block',
        margin: '0 2em',
    });
    public logo = style({
        display: 'inline-block',
        height: '2.5em',
        width: 'auto',
    });
    public main = style({
        alignContent: 'space-between',
        alignItems: 'center',
        background: '#3921deb3',
        display: 'flex',
        fontFamily: "'Varela Round', sans-serif",
        margin: 0,
        padding: '.5em 3em',
        position: 'fixed',
        top: 0,
        verticalAlign: 'middle',
        width: '100%',
    });
    public ul = style({
        listStyle: 'none',
        padding: '0 1em'
    });
    public item = style({
        display: 'inline',
        padding: '1em',
    });
    public link = style({
        color: 'inherit',
        fontWeight: 'bold',
        textDecoration: 'none',
    });
    public tray = style({
        background: '#fff',
        borderBottomLeftRadius: '.5em',
        borderTopLeftRadius: '.5em',
        display: 'inline-block',
        float: 'right',
        position: 'fixed',
        right: 0,
    });
    public tItem = style({
        color: '#3921deb3',
        display: 'inline',
        padding: '1em',
    });
}