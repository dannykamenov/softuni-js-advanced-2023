(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        } else {
            return this.toString();
        }
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        } else {
            return this.toString();
        }
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");
            if (lastIndex !== -1) {
                return this.substring(0, lastIndex) + "...";
            } else {
                return this.substring(0, n - 3) + "...";
            }
        }   
    };

    String.format = function (string, ...params) {
        params.forEach((p, i) => {
            string = string.replace(`{${i}}`, p);
        });

        return string;
    };
})()





let str = "my string";

str = str.ensureStart("my");

str = str.ensureStart("hello ");

str = str.truncate(16);

str = str.truncate(14);

str = str.truncate(8);

str = str.truncate(4);

str = str.truncate(2);

str = String.format(
  "The {0} {1} fox",

  "quick",
  "brown"
);

str = String.format(
  "jumps {0} {1}",

  "dog"
);
