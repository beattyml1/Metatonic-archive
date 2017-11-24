import {TextTypes} from "./TextTypes";
import {DateTimeTypes} from "./DateTimeType";
import {SchemaTypeCategory} from "./Records";

export type DataTypes = TextTypes | DateTimeTypes | "quantity" | "record" | "code";