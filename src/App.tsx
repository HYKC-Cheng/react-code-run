import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import "./App.less";

const App = () => {
  const editorRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const editor = useRef<any>(null);

  useEffect(() => {
    editor.current = monaco.editor.create(editorRef.current, {
      value: "123",
      language: "javascript",
      autoClosingOvertype: "always",
      autoIndent: "keep",
      tabSize: 1,
      detectIndentation: true,
      automaticLayout: true,
      minimap: {
        // 关闭小地图
        enabled: false,
      },
      foldingStrategy: "indentation", // 代码可分小段折叠
      scrollbar: {
        // 滚动条设置
        verticalScrollbarSize: 4, // 竖滚动条
        horizontalScrollbarSize: 6, // 横滚动条
      },
      cursorStyle: "line", // 光标样式
    });
  }, []);

  return (
    <div className="container">
      <div ref={editorRef} className="eidtor"></div>
      <div className="result-container">
        <button className="result-button">run</button>
        <div id="result" />
      </div>
    </div>
  );
};

export default App;
