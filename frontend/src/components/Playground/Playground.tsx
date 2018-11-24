
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
		this.state = {text: "console.log();", enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true};
		this.handler= this.handler.bind(this);
	}

	public render() {
		let side: JSX.Element;
		side = (
			<section className={s.side}>
				<ul className={s.files}>
					<li>
						file
					</li>
				</ul>
			</section>
		)

		return (
			<article className={s.grid}>
				{side}
				<section className={s.live}>
					<AceEditor
					mode="javascript"
					theme="monokai"
					name="coder"
					className={s.code}
					width={"100%"}
					wrapEnabled={true}
					fontSize={20}
					value={this.state.text}
					showPrintMargin={false}
					editorProps={{$blockScrolling: true}}
					highlightActiveLine={true}
					setOptions={{
						enableBasicAutocompletion: this.state.enableBasicAutocompletion,
						enableLiveAutocompletion: this.state.enableLiveAutocompletion,
						enableSnippets: this.state.enableSnippets,
						showLineNumbers: true,
						tabSize: 4,
					  }}
				/>
				</section>
				
				<textarea onKeyUp={this.handler} className={s.secret} />
			</article>
			
		);
	}

	public handler(el: React.KeyboardEvent<HTMLTextAreaElement>): void {
		
		this.setState({text: el.currentTarget.value});

	}
}

export default Playground;
