class socket{
  ws = null
  #alive = false
  #params = null
  #reconnect_timer = null
  #heart_timer = null
  #message_func = null

  heartBeat = 50000
  heartMsg = 'hello'
  reconnect = true
  reconnectTime = 5000
  reconnectTimes = 10

  constructor(params) {
    this.#params = params
    this.init()
  }

  init() {
    clearInterval(this.#reconnect_timer)
    clearInterval(this.#heart_timer)

    let params = this.#params
    let {url, port} = params
    let global_params = ['heartBeat','heartMsg','reconnect','reconnectTime','reconnectTimes']
    

    Object.keys(params).forEach(key=>{
      if (global_params.indexOf(key) !== -1) {
        this[key] = params[key]
      }
    })

    let ws_url = port ? url + ':' + port : url

    delete this.ws
    this.ws = new WebSocket(ws_url)

    if (this.#message_func) {
      this.onmessage(this.#message_func)
    }

    this.ws.onopen = () => { 

      this.#alive = true
      clearInterval(this.#reconnect_timer)

      this.onheartbeat()
    }
    this.ws.onclose = () => { 
      this.#alive = false
      clearInterval(this.#heart_timer)
      if (true == this.reconnect) {

        this.onreconnect()
      }
    }
  }

  onheartbeat(func) {
    if (true == this.#alive) {
      this.#heart_timer = setInterval(()=>{
        this.send(this.heartMsg)
        func ? func(this) :false
      },this.heartBeat)
    }
  }

  onreconnect(func) {
    this.#reconnect_timer = setInterval(()=>{
      if (this.reconnectTimes <= 0) {
        clearInterval(this.#reconnect_timer)
        return;
      }else{
        this.reconnectTimes--
      }
      this.init()
      func ? func(this) : false
    },this.reconnectTime)
  }
  send(text) {
    if (true == this.#alive) {
      text = typeof text == 'string' ?  text : JSON.stringify(text)
      this.ws.send(text)
    }
  }


  close() {
    if (true == this.#alive) {
      this.ws.close()
    }
  }


  onmessage(func,all = false) {
    this.ws.onmessage = data => {
      this.#message_func = func
      func(!all ? data.data : data)
    }
  }

  onopen(func) {
    this.ws.onopen = event => {

      this.#alive = true
      func ? func(event) : false

    }
  }

  onclose(func) { 
    this.ws.onclose = event => {
      this.#alive = false
      clearInterval(this.#heart_timer)
      
      if (true == this.reconnect) {

        this.onreconnect()
      }
      func ? func(event) : false
    }
  }

  onerror(func) { 
    this.ws.onerror = event => {
      func ? func(event) : false
    }
  }
}

export default socket
