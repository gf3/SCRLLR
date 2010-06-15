// LOL SUM SCROLLz
;(function(window, document, $, undefined) {
  var cache = {}
    , FT_SCROLL_ELEMENT = (function() { var x
      x = 1
    })()

  function Tween (from, to, speed, holla, autoStart) { var now, start, end, timer, gotoEnd
    this.complete = false, this.started = false

    // Instance Methods
    this.begin = function begin () {
      if (! this.started) {
        this.started = true
        start = (new Date()).getTime()
        end = start + speed.duration
        function tick () {
          step.call(this)
          perform.call(this) }
        tick()
        timer = setInterval($.proxy(tick, this), 13) } }

    this.end = function end () {
      gotoEnd = true }

    // Privatez
    function perform () {
      if (gotoEnd || (new Date()).getTime() >= end) {
        clearInterval(timer)
        this.complete = true
        holla.call(null, now = to) }
      else
        holla.call(null, now) }

    function step () { var n, state, pos
      n = (new Date()).getTime() - start
      state = n / speed.duration
      pos = $.easing[speed.easing](state, n, 0, 1, speed.duration)
      now = from + ((to - from) * pos) }
    
    if (autoStart) this.begin()
  }

  function SCRLLR (elements, options) { var fx1, fx2, current
    cache[elements.selector] = this
    this.sections = elements
    this.options = options || {}, this.options.__proto__ = SCRLLR.options

    // Instance Methods
    this.show = function show (sectionID) { var prev, section, offsets
      prev = current

      switch (sectionID) {
        case "first":
          current = 0
          break
        case "last":
          current = this.sections.length - 1
          break
        case "prev":
          current = Math.max(0, current - 1)
          break
        case "next":
          current = Math.min(this.sections.length, current + 1)
          break
        default:
          if (typeof sectionID === "number")
            current = sectionID
          else if (typeof sectionID === "string")
            current = this.sections.index(this.sections.filter(sectionID)[0])
          else
            return
      }

      if (current < 0 || prev == current) return
      offsets = (section = $(this.sections[current])).offset()

      fx1 = new Tween( document.body.scrollTop
                     , offsets.top + options.top
                     , $.speed(this.options.duration, this.options.easing)
                     , scrollTop )
      fx2 = new Tween( document.body.scrollLeft
                     , offsets.left + options.left
                     , $.speed(this.options.duration, this.options.easing)
                     , scrollLeft )
      fx1.begin(), fx2.begin()

      return section }

    // Privatez
    function scrollTop (val) {
      console.log(val)
      document.body.scrollTop = val }

    function scrollLeft (val) {
      document.body.scrollLeft = val }
  }

  SCRLLR.options =
    { easing:   $.easing.swing ? "swing" : "linear"
    , duration: $.fx.speeds._default
    , top:      0
    , left:     0
    }

  $.fn.scrllr = function(options) {
    if (this.length)
      return this.selector in cache ? cache[this.selector] : new SCRLLR(this, options) }

})(this, this.document, jQuery);

