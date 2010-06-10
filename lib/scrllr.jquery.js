// LOL SUM SCROLLz

;(function(window, document, $, undefined) {
  var cache = {}

  function Tween (from, to, duration, holla, autoStart) { var current, start
    this.complete = false, this.started = false

    // Instance Methods
    this.begin = function begin () {
      if (! this.started) {
        this.started = true
        start = (new Date()).getTime()
      }
    }

    this.end = function end () {
    }

    // Privatez
    function step () { var n
      n = (new Date()).getTime() - start
      current = n / duration
    }
  }

  function SCRLLR (elements, options) { var effect
    cache[elements.selector] = this
    this.sections = elements
    this.options = options, this.options.__proto__ = SCRLLR.options

    // Instance Methods
    this.show = function show (sectionID) { var section
      if (typeof sectionID === "number")
        section = this.sections[sectionID]
      else if (typeof sectionID === "string")
        section = this.sections.filter(sectionID).first()
      else
        return

      animate(section)
    }

    // Privatez
    function animate (section) {
      // Create Animation class
    }
  }

  SCRLLR.options =
    { easing:   $.easing.swing ? "swing" : "linear"
    , duration: $.fx.speeds._default
    }

  $.fn.scrllr = function(options) {
    if (this.length)
      return this.selector in cache ? cache[this.selector] : new SCRLLR(this, options) }

})(this, this.document, jQuery);

