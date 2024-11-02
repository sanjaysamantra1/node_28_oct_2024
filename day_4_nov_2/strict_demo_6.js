'use strict'

function test() {
    console.log(this);
    // regular  : this = global
    // strict   : this = undefined
}
test();