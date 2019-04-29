import * as _ from "lodash";
import * as React from "react";
import { AbstractNodeFactory, AbstractPortFactory, BaseWidget, DefaultLinkModel, DefaultNodeModel, DiagramEngine, DiagramModel, DiagramWidget, NodeModel, PortModel, PortWidget } from "storm-react-diagrams";
import "storm-react-diagrams/dist/style.min.css";

import { BracketNodeWidget } from "./BracketNodeWidget"
import { BracketNodeModel } from "./BracketNodeModel"
import { BracketPortModel } from "./BracketPortModel"

import './Bracket.css'
import { Exception } from "handlebars";

// class DiamondPortModel extends PortModel {
// 	constructor(pos = "top") {
// 		super(pos, "diamond")
// 		this.position = pos
// 	}
// 	serialize() {
// 		return _.merge(super.serialize(), {
// 			position: this.position
// 		})
// 	}
// 	deSerialize(data, engine) {
// 		super.deSerialize(data, engine)
// 		this.position = data.position
// 	}
// 	createLinkModel() {
// 		return new DefaultLinkModel()
// 	}
// }

// class DiamondNodeModel extends NodeModel {
// 	constructor() {
// 		super("diamond")
// 		this.addPort(new DiamondPortModel("top"))
// 		this.addPort(new DiamondPortModel("left"))
// 		this.addPort(new DiamondPortModel("bottom"))
// 		this.addPort(new DiamondPortModel("right"))
// 	}
// }

// class DiamondNodeFactory extends AbstractNodeFactory {
// 	constructor() {
// 		super("diamond")
// 	}
// 	generateReactWidget(diagramEngine, node) {
// 		return <DiamondNodeWidget node={node} />
// 	}
// 	getNewInstance() {
// 		return new DiamondNodeModel()
// 	}
// }

class SimplePortFactory extends AbstractPortFactory {
	constructor(type, cb) {
		super(type)
		this.cb = cb
	}

	getNewInstance(initialConfig) {
		return this.cb(initialConfig)
	}
}

class BracketNodeFactory extends AbstractNodeFactory {
	constructor() {
		super("bracket")
	}
	generateReactWidget(diagramEngine, node) {
		return <BracketNodeWidget node={node} />
	}
	getNewInstance() {
		return new BracketNodeModel()
	}
}

export const Bracket = ({games = []}) => {
	const startx = 10;
	const starty = 10;
	const width = 300;
	const height = 100;
	let engine = new DiagramEngine();
	engine.installDefaultFactories();

	engine.registerPortFactory(new SimplePortFactory("bracket", config => new BracketPortModel()))
	engine.registerNodeFactory(new BracketNodeFactory())

	let model = new DiagramModel();

	let nodes = [];
	for (let i = 0; i < 4; i++) {
		let game = { };
		if (i < games.length) {
			game = games[i];
		}

		let node = new BracketNodeModel(game.home, game.visitor, "#eee", game.played, game.homeWinner)
		node.setPosition(startx, starty + height * i)
		nodes.push(node)
	}

	for (let i = 4; i < 6; i++) {
		let game = { };
		if (i < games.length) {
			game = games[i];
		}

		let node = new BracketNodeModel(game.home, game.visitor, "#eee", game.played, game.homeWinner)
		node.setPosition(startx + width, starty + (height / 2) * (((i - 3) * (i - 3)) + i - 4))
		nodes.push(node)
	}

	let game = { };
	if (7 == games.length) {
		game = games[6];
	}

	let node = new BracketNodeModel(game.home, game.visitor, "#eee", game.played, game.homeWinner)

	node.setPosition(startx + (width * 2), starty + height + height / 2)
	nodes.push(node)

	let links = []

	links.push(nodes[0].getRightPort().link(nodes[4].getLeftPort()))
	links.push(nodes[1].getRightPort().link(nodes[4].getLeftPort()))

	links.push(nodes[2].getRightPort().link(nodes[5].getLeftPort()))
	links.push(nodes[3].getRightPort().link(nodes[5].getLeftPort()))

	links.push(nodes[4].getRightPort().link(nodes[6].getLeftPort()))
	links.push(nodes[5].getRightPort().link(nodes[6].getLeftPort()))

	//4) add the models to the root graph
	model.addAll(...nodes, ...links);
	// model.addAll(node5, node6, node7)

	//5) load model into engine
	engine.setDiagramModel(model);

	//6) render the diagram!
	return <DiagramWidget className="bracket-canvas" diagramEngine={engine} />;
};