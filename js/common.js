/*commonjs 2016-06-12*/
(function($){
	$().ready(function(){
		//news information
		var newInfoIndex=1;
		var newInfoSwitch=true;
		
		$('#newsInfo .newsTogCon ul').append($('#newsInfo .newsTogCon ul li').clone());
		var newInfoLength=$('#newsInfo .newsTogCon li').length;


		function autoNewsInfo(){
			$('#newsInfo .right li').removeClass('active');
			$('#newsInfo .right li').eq(newInfoIndex).addClass('active');

			$('#newsInfo .left .infoTips').text('').text($('#newsInfo .right li').eq(newInfoIndex).find('h2').text());

			$('#newsInfo .left img').fadeTo('slow','0',function(){
				$('#newsInfo .left img').attr('src','img/newsInfo'+(newInfoIndex+1)+'.jpg');
				$('#newsInfo .left img').fadeTo('slow','1');

				newInfoIndex++;
				
			});


			if(newInfoIndex>(newInfoLength)/2){
				$('#newsInfo .newsTogCon ul').css('top','0')
				newInfoIndex=1;
				$('#newsInfo .right li').removeClass('active');
				$('#newsInfo .right li').eq(1).addClass('active');
			}

			$('#newsInfo .newsTogCon ul').animate({
				'top':'-=110px'
			})
			
		}

		var newsInfoTimer=setInterval(autoNewsInfo,2800);

		/*$('#changeList .nextList').on('click',function(){
			clearInterval(newsInfoTimer);
			if(!$('#newsInfo .newsTogCon ul').is(':animated')){
				var newsInfoTimer=setInterval(autoNewsInfo,2800);
			}
			
		})*/

		/*$('#changeList .nextList').on('click',function(){
			
			if(!$('#newsInfo .newsTogCon ul').is(':animated')){
				if(newInfoIndex<(newInfoLength-4)){
					newInfoIndex++;
					$('#newsInfo .right li').removeClass('active');
					$('#newsInfo .right li').eq(newInfoIndex).addClass('active');

					$('#newsInfo .newsTogCon ul').animate({
						'top':'-=110px'
					})
				}else{
					newInfoSwitch=false;
				}
			}
			
		})
*/
		/*$('#changeList .prevList').on('click',function(){
			if(!$('#newsInfo .newsTogCon ul').is(':animated')){
				if(newInfoIndex>=1){
					newInfoIndex--;
					console.log(newInfoIndex);
					$('#newsInfo .right li').removeClass('active');
					$('#newsInfo .right li').eq(newInfoIndex).addClass('active');

					$('#newsInfo .newsTogCon ul').animate({
						'top':'+=110px'
					})
				}else{
					newInfoSwitch=true;
				}
				
			}
			
		})*/

		/*setInterval(function(){
			if(newInfoSwitch){
				$('#changeList .nextList').trigger('click');
			}else{
				$('#changeList .prevList').trigger('click');
			}
			
		},2800);*/
	})
})(jQuery);