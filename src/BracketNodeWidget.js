import * as _ from "lodash";
import * as React from "react";
import { AbstractNodeFactory, AbstractPortFactory, BaseWidget, DefaultLinkModel, DefaultNodeModel, DiagramEngine, DiagramModel, DiagramWidget, NodeModel, PortModel, PortWidget } from "storm-react-diagrams";
import "storm-react-diagrams/dist/style.min.css";

import './Bracket.css'

export class BracketNodeWidget extends BaseWidget {
	static defaultProps = {
		size: 150,
		node: null
	};

	constructor(props) {
		super("bracket-node", props);
		this.state = {};
	}

	render() {
		return (
			<div {...this.getProps()}
				style={{
					background: this.props.node.color
				}}
			>
				<div className={this.bem("__title")}>
					<div className={this.bem("__name")} style={{ background: this.props.node.played && this.props.node.homeWinner ? "#0a0" : "inherit" }}>{this.props.node.home}</div>
				</div>
				<PortWidget name="left" node={this.props.node} style={{ width: 0, height: 0 }} />
				<PortWidget name="right" node={this.props.node} />
				<div className={this.bem("__title")}>
					<div className={this.bem("__name")} style={{ background: this.props.node.played && !this.props.node.homeWinner ? "#0a0" : "inherit" }} >{this.props.node.visitor}</div>
				</div>
			</div>
		);
	}

}