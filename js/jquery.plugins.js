//common plugins

(function($){
	$().ready(function(){

		//designer dynamic设计师动态
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
		    }
		});

	})
})(jQuery);
