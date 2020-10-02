let Cache = (
    function () {
        let instance;
        return {
            get_instance: function () {
                if (!instance) {
                    instance = {
                        data: {},
                        put: function (key, value) {
                            this.data[key] = value;
                        },
                        get: function (key) {
                            return this.data[key];
                        }
                    }
                }
                return instance;
            }
        }
    }
)(); // Immediatly Invoked Functions

let cache1 = Cache.get_instance();
let cache2 = Cache.get_instance();
console.log(`Are these caches the same: ${cache1 === cache2}`);
cache1.put("ankara", 312);
console.log(`Ankara: ${cache2.get("ankara")}`);