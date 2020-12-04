import { getToken } from '@/utils/authToken'
import Vue from 'vue'

let websock = null
let messageCallback = null
let errorCallback = null


function getWebHost(){
	var curHost = window.location.hostname;
	return curHost;
}


function websocketOnMessage (e) {
  messageCallback(JSON.parse(e.data))
}
 

function websocketSend (agentData) {
  setTimeout(() => {
    if (websock.readyState === websock.OPEN) { 
      websock.send(JSON.stringify(agentData))
    }
    if (websock.readyState === websock.CLOSED) { 
      Vue.$vToastify.error('ws connection failed')
      errorCallback()
    }
  }, 500)
}
 
function websocketClose (e) {  
  if (e && e.code !== 1000) {
    Vue.$vToastify.error('ws connection failed')
    errorCallback()
  }
}


function websocketOpen (e) {
  console.log('ws connect success')
}
 
function initWebSocket () {
  if (typeof (WebSocket) === 'undefined') {
    Vue.$vToastify.error('ws connection unsupported.')
    return false
  }
 
  const token = 'JWT=' + getToken()
  const requestWsUrl = wsUrl + '?' + token
  websock = new WebSocket(requestWsUrl)

  websock.onmessage = function (e) {
    websocketOnMessage(e)
  }
  websock.onopen = function () {
    websocketOpen()
  }
  websock.onerror = function () {
    Message.error('ws连接异常，请稍候重试')
    errorCallback()
  }
  websock.onclose = function (e) {
    websocketClose(e)
  }
}
 
export function sendWebsocket (url, agentData, successCallback, errCallback) {
  wsUrl = url
  initWebSocket()
  messageCallback = successCallback
  errorCallback = errCallback
  websocketSend(agentData)
}



export function closeWebsocket () {
  if (websock) {
    websock.close()
    websock.onclose()
  }
}