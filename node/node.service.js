const $HTTP = 'https';
const $COOKIE = require("av/av.cookie.js");
const $NODE_SW = require('av/av.node.js');

function node() {
  function create(nodeDATA,a) {
  let cout = cout + 1;
  window.localStorage.setItem("["+user(a)+"]"+"node_"+cout, encode(nodeDATA, $HTTP));
    return "true";
  }
  function encode(content, http) {
    let query = "encript="+http+"?"+"query";
    return query+"=",escape(content);
  }
  function decode(nodeID) {
    const item = window.localStorage.getItem(nodeID);
    const itemSplit = item.split("=");
    return itemSplit;
  }
  function user(use) {
    let a = 'getLocalClient:'+use;
    return a;
  }
  function que(uri,http) {
    return http+uri;
  }
}