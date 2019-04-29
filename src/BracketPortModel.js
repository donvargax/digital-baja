import * as _ from "lodash";
import { DefaultLinkModel, PortModel } from "storm-react-diagrams";

export class BracketPortModel extends PortModel {
	constructor(pos = "top") {
		super(pos, "bracket")
		this.position = pos
	}
	serialize() {
		return _.merge(super.serialize(), {
			position: this.position
		})
	}
	deSerialize(data, engine) {
		super.deSerialize(data, engine)
		this.position = data.position
	}
	createLinkModel() {
		return new DefaultLinkModel()
	}

	link(port) {
		let link = this.createLinkModel();
		link.setSourcePort(this);
		link.setTargetPort(port);
		return link;
	}

}