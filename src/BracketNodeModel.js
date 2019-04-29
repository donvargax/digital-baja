import { NodeModel } from "storm-react-diagrams";

import { BracketPortModel } from "./BracketPortModel";

export class BracketNodeModel extends NodeModel {
	constructor(home = "None", visitor = "None", color = "rgb(0,192,255)", played = false, homeWinner = false) {
		super("bracket")
		this.home = home;
		this.visitor = visitor;
		this.color = color;
		this.played = played;
		this.homeWinner = homeWinner;
		this.addPort(new BracketPortModel("left"))
		this.addPort(new BracketPortModel("right"))
	}

	getLeftPort() {
		return this.ports.left
	}

	getRightPort() {
		return this.ports.right
	}

}