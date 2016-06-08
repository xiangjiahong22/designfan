(function($){
	$().ready(function(){
		//banner
		var winWidth=$(window).width();
		$('.banner').css('width',winWidth+'px');  //banner设置宽度100%
		var bannerLength=$('.bannerCon li').length;  //banner的个数
		$('.bannerCon li').css('width',winWidth+'px');  //设置banner list的长度  100%
		var bannerWidth=$('.bannerCon li').width();  //获取banner list长度

		$('.bannerCon').css('width',bannerLength*bannerWidth+'px');  //设置bannerCon总长度

		var bannerDotStr='';
		$('.bannerCon li').each(function(){
			bannerDotStr+=('<a href="javascript:void(0)"></a>');
		})
		$('.bannerListDot').html(bannerDotStr);
		$('.bannerListDot a:first-child').addClass('listActive');


		var bannerIndex=0;     //设置幻灯片index     
		var bannerTimer=null;   //设置幻灯片timer

		$('.bannerListDot').on('click','a',function(){

			clearInterval(bannerTimer);
			
			bannerIndex=$(this).index();
			if(!$('.bannerCon').is(':animated')){

				$('.bannerListDot a').removeClass('listActive');

				$('.bannerListDot a').eq($(this).index()).addClass('listActive');
				$('.bannerCon').animate({
					'left':'-'+bannerIndex*bannerWidth+'px'
				});
			}
			bannerTimer=setInterval(bannerAuto,3000); 
			
		})

		bannerTimer=setInterval(bannerAuto,3000);   //设置定时器

		function bannerAuto(){
			bannerIndex=bannerIndex>=(bannerLength-1) ? 0 : ++ bannerIndex;
			$('.bannerListDot a').eq(bannerIndex).trigger('click');
		}


		 $(document).ready(function() {
	      $(".bannerCon img").css("width",window.innerWidth+"px");
	      $(".bannerListDot").css("width",window.innerWidth+"px")
	    });
	    $(window).resize(function() {
	      $(".bannerCon img").css("width",window.innerWidth+"px");
	      $(".bannerListDot").css("width",window.innerWidth+"px");
	    });
		
	})
})(jQuery);