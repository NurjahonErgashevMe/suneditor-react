```typescript
// Suneditor.d.ts
import { FC } from "react";
import { SunEditorReactProps } from "../types/SunEditorReactProps";

declare const SunEditor: FC<SunEditorReactProps>;

export {SunEditorReactProps}
export default SunEditor;

// suneditor-react/dist/index.d.ts

import SunEditor, { SunEditorReactProps } from "./components/SunEditor";
export * as buttonList from "./buttons/buttonList";
export { SunEditorReactProps }
export default SunEditor;
```