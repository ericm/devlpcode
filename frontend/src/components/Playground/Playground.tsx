
/*tslint-disable no-alert, no-console */
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import * as React from 'react';
import AceEditor from 'react-ace';
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
				<AceEditor
					mode="javascript"
					theme="monokai"
					name="coder"
					fontSize={20}
					editorProps={{$blockScrolling: true}}
				/>
				<textarea onKeyUp={this.handler} className={s.secret} />
			</article>
			
		);
	}

	public handler(el: React.KeyboardEvent<HTMLTextAreaElement>): void {
		
		this.setState({text: el.currentTarget.value});

	}
}

export default Playground;
