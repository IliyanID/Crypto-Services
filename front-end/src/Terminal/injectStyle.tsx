const injectStyle = (style:string) => {
    const styleElement = document.createElement('style');
    let styleSheet:any;

  
    document.head.appendChild(styleElement);
  
    styleSheet = styleElement.sheet;
  
    styleSheet.insertRule(style, styleSheet.cssRules.length);
  };
  
  export default injectStyle;