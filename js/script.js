$(function() {
  
  //swiper
  var swiper = new Swiper('.banner-wrap', {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
	
	//헤더의 유틸메뉴 클릭하면 나타나기
	$('.util-menu > a').on('click', function() {
		$('.util-sub').toggleClass('on');
	});
	
	//모바일메뉴
	$('.mobile-menu').on('click', function() {
		/*$(this).toggleClass('on');
		$('.gnb').toggleClass('show');*/
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$('.gnb').removeClass('show');
			$('.btn-top').show();
		} else {
			$(this).addClass('on');
			$('.gnb').addClass('show');
			$('.btn-top').hide();
		}
	});
	
	//푸터의 패밀리 사이트 클릭하면 펼쳐지기 -> 두개를 동시에 제어
	$('.family-link').on('click', function() {          //.family-link를 클릭했을 때
		if ($(this).hasClass('on')) {                     //만약에 .family-link에 클래스명 on이 있으면
			  $(this).add('.family-list').removeClass('on');//.family-link랑 .family-list에 클래스명 on을 떼어버리고
			} else {																				//만약에 위와 다른 경우라면(.family-link에 클래스명 on이 없으면)
			  $(this).add('.family-list').addClass('on');   //.family-link랑 .family-list에 클래스명 on을 붙여주어라
			}
	});
	
	//스크롤 내리면 해더 배경색 채우기
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 500) {
      $('header').addClass('active');
			$('.btn-top').show();
      if($(window).scrollTop() >= $(document).height() - $(window).height()) {
          $('.btn-top').css('bottom', 100);
        } else {
          $('.btn-top').css('bottom', 50);
      }
    } else {
      $('header').removeClass('active');
			$('.btn-top').hide();
    }
	});
	
	
});