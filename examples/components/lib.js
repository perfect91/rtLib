import HelloWord from './components/HelloWord.vue';
const components = [HelloWord];
const directives = [];
const install = function(Vue) {
    /* istanbul ignore if */
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
    //自定义指令
    directives.map(directive => {
        Vue.directive(directive.name, directive);
    });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { install, HelloWord };
