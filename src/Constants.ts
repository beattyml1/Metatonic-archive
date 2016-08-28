 export const inputTypes = [
   'text',
   'date',
   'currency',
   'decimal',
   'integer',
   'email',
   'tel',
   'checkbox',
   'dropdown'
 ];
 export const fullWidthTypes = [ 'multiline-text' ];

 export const typeMap = {
   "select": {
     "inlineList": "radio",
     "dropdown": "dropdown",
     "popup": "popup-select-one"
   },
   "multi-select": {
     "inlineList": "checklist",
     "dropdown": "multi-select",
     "popup": "popup-multi-select"
   }
 }
