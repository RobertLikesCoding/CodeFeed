// This declaration file is necessary for TypeScript to understand CSS Modules.
// Without it, TypeScript would throw an error when importing files with the `.module.css` extension
// because it doesn't natively know how to handle such imports.
// The declaration tells TypeScript that any `.module.css` file will export an object
// where keys are class names (strings) and values are the corresponding generated class names (also strings).
// This allows us to use CSS Modules with proper type checking and autocomplete in TypeScript.

// declare module '*.module.css' {
//   const classNames: { [key: string]: string };
//   export default classNames;
// }