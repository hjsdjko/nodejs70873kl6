const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejs70873kl6/",
            name: "nodejs70873kl6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejs70873kl6/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "二手交易系统"
        } 
    }
}
export default base
