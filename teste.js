it('calls all subscribers when exceptions happen', function () {  
  var myAPI = { 
    method: function () {} 
  }

  var spy = sinon.spy()
  var mock = sinon.mock(myAPI)
  mock.expects("method").once().throws()

  PubSub.subscribe("message", myAPI.method)
  PubSub.subscribe("message", spy)
  PubSub.publishSync("message", undefined)

  mock.verify()
  assert(spy.calledOnce)
// example taken from the sinon documentation site: http://sinonjs.org/docs/
})