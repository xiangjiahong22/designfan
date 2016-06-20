/*commonjs 2016-06-12*/
(function($){
	$().ready(function(){
		//news information
		var newInfoIndex=1;
		var picIndex=1;
		var newInfoSwitch=true;
		
		$('#newsInfo .newsTogCon ul').append($('#newsInfo .newsTogCon ul li').clone());
		var newInfoLength=$('#newsInfo .newsTogCon li').length;
		var newsInfoHeight=$('#newsInfo .newsTogCon li').outerHeight(true);
		var newsInfoWholeH=newInfoLength*newsInfoHeight;
		var newsInfoMinH=4*newsInfoHeight;  //half

		function autoNewsInfo(){
			$('#newsInfo .left .infoTips').text('').text($('#newsInfo .right li').eq(newInfoIndex).find('h2').text());

			newInfoIndex++;
			if(picIndex>=newInfoLength/2){
				picIndex=1
			}else{
				picIndex++;
			}

			$('#newsInfo .right li').removeClass('active');
			$('#newsInfo .right li').eq(newInfoIndex-1).addClass('active');

			$('#newsInfo .left img').fadeTo('slow','0',function(){

				$('#newsInfo .left img').attr('src','img/newsInfo'+(picIndex)+'.jpg');
				$('#newsInfo .left img').fadeTo('slow','1');
				
			});

			$('#newsInfo .newsTogCon ul').animate({
				'top':'-=110px'
			},function(){
				if(newInfoIndex>(newInfoLength)/2){
					$('#newsInfo .newsTogCon ul').css('top','0')
					newInfoIndex=1;
					$('#newsInfo .right li').removeClass('active');
					$('#newsInfo .right li').eq(0).addClass('active');
				}
			})
		}

		function autoNewsNext(){
		
			if(eval(newsInfoWholeH-Math.abs($('#newsInfo .newsTogCon ul').css('top').replace('px','')))<=newsInfoMinH){
				return false;
			}else{
				$('#newsInfo .left .infoTips').text('').text($('#newsInfo .right li').eq(newInfoIndex).find('h2').text());

				newInfoIndex++;
				if(picIndex>=newInfoLength/2){
					picIndex=1
				}else{
					picIndex++;
				}

				$('#newsInfo .right li').removeClass('active');
				$('#newsInfo .right li').eq(newInfoIndex-1).addClass('active');

				$('#newsInfo .left img').fadeTo('slow','0',function(){

					$('#newsInfo .left img').attr('src','img/newsInfo'+(picIndex)+'.jpg');
					$('#newsInfo .left img').fadeTo('slow','1');
					
				});

				$('#newsInfo .newsTogCon ul').animate({
					'top':'-=110px'
				})
			}
		}

		function autoNewsPrev(){
		
			if(Math.abs($('#newsInfo .newsTogCon ul').css('top').replace('px',''))<=0){
				return false;
			}else{
				$('#newsInfo .left .infoTips').text('').text($('#newsInfo .right li').eq(newInfoIndex-2).find('h2').text());

				newInfoIndex--;
				if(picIndex<=1){
					picIndex=7
				}else{
					picIndex--;
				}

				$('#newsInfo .right li').removeClass('active');
				$('#newsInfo .right li').eq(newInfoIndex-1).addClass('active');

				$('#newsInfo .left img').fadeTo('slow','0',function(){

					$('#newsInfo .left img').attr('src','img/newsInfo'+(picIndex)+'.jpg');
					$('#newsInfo .left img').fadeTo('slow','1');
					
				});

				$('#newsInfo .newsTogCon ul').animate({
					'top':'+=110px'
				})
			}
		}

		var newsInfoTimer=setInterval(autoNewsInfo,2800);

		$('.newsInfo .right .changeList .nextList').on('click',function(){
			clearInterval(newsInfoTimer);
			if(!$('#newsInfo .newsTogCon ul').is(':animated')){

				autoNewsNext();
			}
			newsInfoTimer=setInterval(autoNewsInfo,2800);

		})

		$('.newsInfo .right .changeList .prevList').on('click',function(){
			clearInterval(newsInfoTimer);
			if(!$('#newsInfo .newsTogCon ul').is(':animated')){

				autoNewsPrev();
			}
			newsInfoTimer=setInterval(autoNewsInfo,2800);

		})

		//workDetails workPic
		var workPicListWidth=$('.workDetails .workPicCon li').outerWidth(true);
		var workPicListLength=$('.workDetails .workPicCon li').length;
		$('.workDetails .workPicCon ul').css('width',workPicListLength*workPicListWidth+'px');
		var workPicWidth=$('.workDetails .workPicCon ul').width();
		var workPicWrapWidth=$('.workDetails .workPicCon').width();
		var currentIndex=0;

		$('.workPicCon').on('click','li',function(){
			var _thisIndex=$(this).index();
			var introduceText=$('p',this).text();
			$('.workPicCon li').removeClass('active');
			$('.workPicCon li').eq(_thisIndex).addClass('active');

			$('.workPicTop img').stop(true,true).fadeTo('slow','0',function(){
				$('.workPicTop img').attr('src','img/workDetails'+(_thisIndex+1)+'.jpg');
				$('.workPicTop img').attr('currentIndex',_thisIndex+1);
				$('.workPicTop img').fadeTo('slow','1');
				$('.workDetails .left .workPicTop .text').text(introduceText);
				
			});

			if(_thisIndex==0){
				$('.workDetails .workPicTop .prev').css('background','url(img/workPrev.png) rgba(0,0,0,0.3) no-repeat center center');
			}else if(_thisIndex==workPicListLength-1){
				$('.workDetails .workPicTop .next').css('background','url(img/workNext.png) rgba(0,0,0,0.3) no-repeat center center');
			}else{
				$('.workDetails .workPicTop .prev').css('background','url(img/workPrev.png) rgba(0,0,0,0.5) no-repeat center center');
				$('.workDetails .workPicTop .next').css('background','url(img/workNext.png) rgba(0,0,0,0.5) no-repeat center center');
			}
		})

		function thumbNext(){
			var workPicLeft=Math.abs($('.workDetails .workPicCon ul').css('left').replace('px',''));
			//currentIndex=$('.workDetails .workPicTop img').attr('currentIndex');
			
			if(workPicWidth-workPicLeft>workPicWrapWidth){
				if(!$('.workDetails .workPicCon ul').is(':animated')){
					$('.workDetails .workPicCon ul').animate({
						'left':'-='+workPicListWidth+'px'
					})
				}
				$('.workDetails .workPicBot .prevBtn img').attr('src','img/left.png');
			}else{
				$('img',this).attr('src','img/right2.png');
			}
		}

		function thumbPrev(){
			var workPicLeft=$('.workDetails .workPicCon ul').css('left').replace('px','');
			//currentIndex=$('.workDetails .workPicTop img').attr('currentIndex');
			if(workPicLeft<0){
				if(!$('.workDetails .workPicCon ul').is(':animated')){
					$('.workDetails .workPicCon ul').animate({
						'left':'+='+workPicListWidth+'px'
					})
				}
				$('.workDetails .workPicBot .nextBtn img').attr('src','img/right.png');

				
			}else{
				$('img',this).attr('src','img/left2.png');


			}
		}

		$('.workDetails .workPicBot .nextBtn').on('click',thumbNext);
		$('.workDetails .workPicBot .prevBtn').on('click',thumbPrev);

		function bigNext(){
			currentIndex=eval($('.workDetails .workPicTop img').attr('currentIndex'));
			var introduceText=$('.workDetails .workPicCon li').eq(currentIndex).find('p').text();
			if(currentIndex<workPicListLength){
				if(!$('.workPicTop img').is(':animated')){
					$('.workPicTop img').stop(true,true).fadeTo('slow','0',function(){
						$('.workPicTop img').attr('src','img/workDetails'+(currentIndex+1)+'.jpg');
						$('.workPicTop img').attr('currentIndex',currentIndex+1);
						$('.workPicTop img').fadeTo('slow','1');
						$('.workPicCon li').removeClass('active');
						$('.workPicCon li').eq(currentIndex).addClass('active');
						$('.workDetails .workPicTop .prev').css('background','url(img/workPrev.png) rgba(0,0,0,0.5) norepeat center center');
						$('.workDetails .left .workPicTop .text').text(introduceText);
					});
				}
				
			}else{
				$('.workDetails .workPicTop .next').css('background','url(img/workNext.png) rgba(0,0,0,0.3) no-repeat center center');
			}
		}
		function bigPrev(){
			currentIndex=eval($('.workDetails .workPicTop img').attr('currentIndex'));
			var introduceText=$('.workDetails .workPicCon li').eq(currentIndex-2).find('p').text();
			if(currentIndex>1){
				if(!$('.workPicTop img').is(':animated')){
					$('.workPicTop img').stop(true,true).fadeTo('slow','0',function(){
						$('.workPicTop img').attr('src','img/workDetails'+(currentIndex-1)+'.jpg');
						$('.workPicTop img').attr('currentIndex',currentIndex-1);
						$('.workPicTop img').fadeTo('slow','1');
						$('.workPicCon li').removeClass('active');
						$('.workPicCon li').eq(currentIndex-2).addClass('active');
						$('.workDetails .workPicTop .next').css('background','url(img/workNext.png) rgba(0,0,0,0.5) no-repeat center center');
						$('.workDetails .left .workPicTop .text').text(introduceText);
					});
				}
				
			}else{
				$('.workDetails .workPicTop .prev').css('background','url(img/workPrev.png) rgba(0,0,0,0.3) no-repeat center center');

			}
		}

		$('.workDetails .workPicTop .next').on('click',bigNext);
		$('.workDetails .workPicTop .prev').on('click',bigPrev);

		
		$('.workDetails .left .workPicTop').hover(function(){
			$('.workDetails .workPicTop .text').stop(true,true).slideDown('fast');
		},function(){
			$('.workDetails .workPicTop .text').stop(true,true).slideUp('fast');
		})

		
	})
})(jQuery);