(function($){
	//滚动背景
    $.fn.scrollbackground = function(options){
		return this.each(function(){
			var $this = $(this);
			var defaultValuescrollBg = {
				url: 				'http://www.daiwei.org/works/UI/imooc/img/bg.jpg', 		//图片地址
				bgPosition: 		'bottom left',											//图片的位置
				bgColor: 			'#348cb2',												//div背景颜色
				bgRepeat: 			'repeat-x',												//重复
				imgwidth: 			1920,													//图片的宽度 是backgroundsize的倍数
				height: 			'100%',													//height 100%  px
				position: 			'absolute',												//定位方式   绝对定位
				duration: 			60,														//动画执行时间
			};

			var opt = $.extend(defaultValuescrollBg,options||{});

			defaultValuescrollBg.init = function(){
				defaultValuescrollBg.setCssAnimation();
				$this.css({
					position: 'relative',
	    			overflow: 'hidden',
				});
				$('<div class="cpt-scollBg"></div>').css({
					'background-color': opt.bgColor,
					'background-image': 'url('+opt.url+')',
					'background-position': opt.bgPosition,
					'background-repeat': opt.bgRepeat,
					'background-size':(opt.imgwidth)+'px auto',
					'-moz-animation': 'cpt-scollBg '+opt.duration+'s linear infinite',
					'-webkit-animation': 'cpt-scollBg '+opt.duration+'s linear infinite',
					'-o-animation': 'cpt-scollBg '+opt.duration+'s linear infinite',
					'-ms-animation': 'cpt-scollBg '+opt.duration+'s linear infinite',
					animation: 'cpt-scollBg '+opt.duration+'s linear infinite',
					height: opt.height,
					width:opt.imgwidth * 3,
					position:opt.position,
				}).appendTo($this);
			};

			defaultValuescrollBg.setCssAnimation = function(){
				var browserType = ['-webkit-','-moz-','-ms-','-o-','']
				var str = '';
				for(var i = 0; i<browserType.length;i++){
					str += "@"+browserType[i]+"keyframes cpt-scollBg { 0% {"+browserType[i]+"transform:translate(0,0);"+browserType[i]+"transform:translate3d(0,0,0);}100%{"+browserType[i]+":transformtranslate(-"+opt.imgwidth+"px,0);"+browserType[i]+"transform:translate3d(-"+opt.imgwidth+"px,0,0);}}";
				}

				var style = document.createElement('style');
				style.type = 'text/css';
				style.innerHTML = str;
				document.getElementsByTagName('head')[0].appendChild(style);
				this.stylesheet = document.styleSheets[document.styleSheets.length-1];

				try {
				    this.stylesheet.insertRule( rule , this.stylesheet.rules.length);
				} catch (e) {
				};
			}

			defaultValuescrollBg.init();
		});
	};
})(jQuery)