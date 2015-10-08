import components from "./components";
import ecsComponents from "./components/ecsComponents";

import lights from "./components/lights";
import cameras from "./components/cameras";
import meshes from "./components/meshes";
import shapes from "./components/shapes";

export default {
	...components,
	ecsComponents,
	lights,
	cameras,
	meshes,
	shapes
}