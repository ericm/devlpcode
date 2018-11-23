import * as React from 'react';
import { pgState } from '../../../interfaces';
import Styles from './Playground.styles';

const s = new Styles;

class Playground extends React.Component<{}, pgState> {

	constructor(props: any) {
		super(props);
		this.state = {text: "console.log();"};
		this.handler= this.handler.bind(this);
	}
	public render() {
		return (
			<article>
				<pre id={"code"}><code>{this.state.text}</code></pre>
				<textarea onKeyUp={this.handler} className={s.secret} />
			</article>
			
		);
	}

	public handler(el: React.KeyboardEvent<HTMLTextAreaElement>): void {
		
		this.setState({text: el.currentTarget.value});

	}
}

export default Playground;
