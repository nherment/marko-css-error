
function Component() {}

Component.prototype.onCreate = function() {
  this.state = {}
}

Component.prototype.refresh = function() {
  this.setState('refreshed', true)
}

module.exports = Component
