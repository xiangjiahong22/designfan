//common plugins
(function($){
	$().ready(function(){
		//designer dynamic
		$.fn.extend({
		    designDynamic:function(time,options){

            var defaults = {
                dynamicHeight: '372px',
                dynamicHeightNum:372,
                dynamicListH:'124px'  //每一行动态height
            };
            var options = $.extend(defaults, options);

            this.css('height',options.dynamicHeight);
           
		   	var time=time;
            var dynamicCon = $('ul', this);
            var dynamicLength=$('ul li',this).length;

            var averageLength=Math.ceil(dynamicLength/3);  //最新资讯行数
            var totalHeight=averageLength*124;             //总高度

			setInterval(function(){
				if(dynamicCon.css('top').replace('px','')<=-(totalHeight-options.dynamicHeightNum)){
					dynamicCon.animate({
						'top':'0'
					})
				}else{
					dynamicCon.animate({
						'top':'-='+options.dynamicListH
					})
				}
			},time);

            return this;
		    },

		    //Seamless scrolling
		    seamlessRoll:function(options){
		    	var slideRightScroll;
		    	var slideLeftScroll;
				$('ul',this).append($('ul li',this).clone());
	            var scrollWidth=this.width();  //总共包裹的slide宽度
	            var scrollLiWidth=$('ul li',this).outerWidth(true);  
	            var scrollLiLength=$('ul li',this).length;  
	            var scrollObj=$('ul',this);
	            $this=this;
	            var scrollTotleWidth=scrollLiLength*scrollLiWidth;
	            var scrollBtn=true;   //screollBtn判断向左还是向右 true：右 false：左
	            $('ul',this).css('width',scrollTotleWidth);

	            var defaults = {
	                direction: 'left',
	                type:'auto',
	                scrollAmount:'1',
	                scrollDelay:'2500',
	                scrollDistance:scrollLiWidth,   //步长
	                minLength:3,  //最小个数
	                animateTime:''
	            };

	            var options = $.extend(defaults, options);

	            function slideRight(){
	            	scrollObj.animate({
	            		'left':'-='+options.scrollDistance+'px'
	            	},options.animateTime,function(){
	            		if(scrollObj.css('left').replace('px','')<=-(scrollTotleWidth/2)){
	            			scrollObj.css({
			            		'left':'0'
			            	})
	            		}
	            	})
	            }

	            function slideLeft(){
	            	scrollObj.animate({
	            		'left':'+='+options.scrollDistance+'px'
	            	},options.animateTime,function(){
	            		if(scrollObj.css('left').replace('px','')>=0){
	            			scrollObj.css({
			            		'left':-scrollTotleWidth/2+'px'
			            	})
	            		}
	            	})
	            }

	            $('.next',$this).on('click',function(){
	            	scrollBtn=true;
	            	clearInterval(slideRightScroll);
	            	clearInterval(slideLeftScroll);
	            	scrollObj.stop(true,true);

	            	slideRight();

	            	slideRightScroll=setInterval(slideRight,options.scrollDelay);
	            })

	            $('.prev',$this).on('click',function(){
	            	scrollBtn=false;
	            	clearInterval(slideRightScroll);
	            	clearInterval(slideLeftScroll);
	            	scrollObj.stop(true,true);

	            	scrollObj.animate({
	            		'left':'+='+options.scrollDistance+'px'
	            	},options.animateTime,function(){
	            		if(scrollObj.css('left').replace('px','')>0){
	            			return false;
	            		}
	            	})
	            	slideLeftScroll=setInterval(slideLeft,options.scrollDelay);
	            })
	            
	           
	            if(scrollLiLength>options.minLength){
	            	if(scrollBtn){
		            		slideRightScroll=setInterval(slideRight,options.scrollDelay);
		            	}else{
		            		slideLeftScroll=setInterval(slideLeft,options.scrollDelay)
		            	}
	            	scrollObj.hover(function(){
		            	clearInterval(slideRightScroll);
		            	clearInterval(slideLeftScroll);
		            	scrollObj.stop(true,true);  //***
		            },function(){
		            	clearInterval(slideRightScroll);
		            	clearInterval(slideLeftScroll);
		            	if(scrollBtn){
		            		
		            		slideRightScroll=setInterval(slideRight,options.scrollDelay);
		            	}else{
		            		slideLeftScroll=setInterval(slideLeft,options.scrollDelay)
		            	}
		            	
		            })
				}

	            return this;
			},

			//toggle hide
			//## .toggleCon ##
			//## .toggle - .hide ##

			//##<div class="designCenter toggleCon">
			//##	<div class="toggle"></div>
			//##	<div class="toggle hide"></div>
			//##	<div class="toggle hide"></div>
			//##</div>
			toggleHide:function(options){
				var defaults = {
	                hash: false
	            };
	            var options = $.extend(defaults, options);

				var toggleWrap=$('.toggleCon');
				$('a',this).on('click',function(){


					var $index=$(this).index();
					$(this).addClass('active').siblings().removeClass('active');

					$('.toggle',toggleWrap).addClass('hide');
					$('.toggle',toggleWrap).eq($index).removeClass('hide');

					if(options.hash){
						window.location.hash='#'+($index+1);
					}
					


				})
			}

		});
	})
})(jQuery);
