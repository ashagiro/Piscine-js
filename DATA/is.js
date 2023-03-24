
// function is() {}

is.num = function (n) { return typeof n === "number" }
is.nan = function (n) { return ((typeof n === "number") && isNaN(n)) }

is.str = function (n) { return typeof n === "string" }
is.bool = function (n) { return typeof n === "boolean" }
is.undef = function (n) { return typeof n === "undefined" }
is.def = function (n) { return typeof n !== "undefined" }

is.arr = function (n) { return ((typeof n === "object") && Array.isArray(n)) }
is.obj = function (n) { return ((typeof n === "object") && !(Array.isArray(n))&& n !== null) }
is.fun = function (n) { return typeof n === "function" }

is.truthy = function (n) { if (n) { return true } return false }
is.falsy = function (n) { if (n) { return false } return true }


