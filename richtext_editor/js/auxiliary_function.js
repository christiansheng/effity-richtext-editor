//获得焦点位置
var getFirstRange = function() {
    var sel = rangy.getSelection();
    return sel.rangeCount ? sel.getRangeAt(0) : null;
}

// 判断浏览器
var ua = window.navigator.userAgent;

var isFirefox = /Firefox/.test(ua);
var isChrome = /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor);
var isIE = /MSIE /.test(ua) || /Trident\//.test(ua);
var isEdge = /Edge\//.test(ua);

//判断文字串为空
function judge_blank(str){
	var re = /^\s*$/g;
	return re.test(str);
}

// jQuery拓展
(function($){
	$.fn.extend({
		// 判断含有焦点
		hasCursor: function(){
			// 获得光标所在节点
			var n = document.getSelection().focusNode;
			if(n == null)
			{
				return false;
			}
			else
			{
				// 遍历其父节点
				while(n != $("body")[0])
				{
					if(n == $(this)[0])
					{
						return true;
					}
					n = n.parentNode;
				}
				return false;
			}
		},
		outerHTML : function() {
			return $(this).clone().wrap('<div></div>').parent().html();
		}
	})
})(jQuery);