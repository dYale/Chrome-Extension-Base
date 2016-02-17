(function ($) {

  $.topZIndex = function (selector) {
    /// <summary>
    /// 	Returns the highest (top-most) zIndex in the document
    /// 	(minimum value returned: 0).
    /// </summary>
    /// <param name="selector" type="String" optional="true">
    /// 	(optional, default = "*") jQuery selector specifying
    /// 	the elements to use for calculating the highest zIndex.
    /// </param>
    /// <returns type="Number">
    /// 	The minimum number returned is 0 (zero).
    /// </returns>

    return Math.max(0, Math.max.apply(null, $.map(((selector || "*") === "*")? $.makeArray(document.getElementsByTagName("*")) : $(selector),
      function (v) {
        return parseFloat($(v).css("z-index")) || null;
      }
    )));
  };

  $.fn.topZIndex = function (opt) {
    /// <summary>
    /// 	Increments the CSS z-index of each element in the matched set
    /// 	to a value larger than the highest current zIndex in the document.
    /// 	(i.e., brings all elements in the matched set to the top of the
    /// 	z-index order.)
    /// </summary>
    /// <param name="opt" type="Object" optional="true">
    /// 	(optional) Options, with the following possible values:
    /// 	increment: (Number, default = 1) increment value added to the
    /// 		highest z-index number to bring an element to the top.
    /// 	selector: (String, default = "*") jQuery selector specifying
    /// 		the elements to use for calculating the highest zIndex.
    /// </param>
    /// <returns type="jQuery" />

    // Do nothing if matched set is empty
    if (this.length === 0) {
      return this;
    }

    opt = $.extend({increment: 1}, opt);

    // Get the highest current z-index value
    var zmax = $.topZIndex(opt.selector),
      inc = opt.increment;

    // Increment the z-index of each element in the matched set to the next highest number
    return this.each(function () {
      this.style.zIndex = (zmax += inc);
    });
  };

})(jQuery);