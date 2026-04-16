import { type SchemaTypeDefinition } from "sanity";

import { project } from "./project";
import { gallery } from "./gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [project, gallery],
};
