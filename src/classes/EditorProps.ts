import Events from './Events';
import FieldMetaData from './FieldMetaData';
export default class EditorProps {
  value: any;
  events: Events;
  metaData: FieldMetaData;
  parentId: string;
  hlevel: number;
  actions: Array<any>;
}
