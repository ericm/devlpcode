import * as brace from 'brace';
import * as React from 'react';
import AceEditor from 'react-ace';
import { pgState } from '../../../interfaces';
import Styles from './Playground.styles';
const s = new Styles;
brace.acequire('brace/theme/github');
brace.acequire('brace/mode/javascript');
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
					mode="javscript"
					theme="github"
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
