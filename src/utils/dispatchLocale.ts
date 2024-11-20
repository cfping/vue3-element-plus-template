function dispatch(language:string){
  const switchLanguageEvent = new CustomEvent('switchLanguage', {
    detail: { language }, // 指定目标语言
  });
  window.dispatchEvent(switchLanguageEvent); // 触发事件
}
export {dispatch}
