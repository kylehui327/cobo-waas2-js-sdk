class Env {
    constructor(basePath) {
        this.basePath = basePath;
    }
}

Env.PROD = new Env("https://api.cobo.com/v2");
Env.DEV = new Env("https://api.dev.cobo.com/v2");
export default Env;
