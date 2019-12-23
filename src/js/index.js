let status = "JS - OK!";
function cl(arg1, arg2, arg3, arg4) {
	console.log(arg1, arg2 || '', arg3 || '', arg4 || '');
	return '-';
}

// cl(status);


var glob = {
	navMenuWrapper: null,
	navMenu: null,
	pageOverlay: null,

	scrollTopButton: null,
}

// =================
@@include('frames/globalFunctions.js')
// ===============


var test = 'include js error';

// import { dropDown } from './frames/globalFunctions'

$(document).ready(function() {
	console.log('document ready')
	// console.log(dropDown)	
	// =================Include Modules==============================

	@@include('testModule.js')

  /*@@include('frames/PopupModule.js')*/
  /*@@include('frames/ValidationModule.js')*/
	/*@@include('frames/AnimateBorderModule.js')*/
  /*@@include('frames/custom_Input_Type_number.js')*/
  /*@@include('frames/AccordionModule.js')*/
  /*@@include('frames/ToggleContentModule.js')*/
  /*@@include('frames/SwitchTabsModule.js')*/
  /*@@include('frames/TextLimitModule.js')*/
  /*@@include('frames/StickyBlockModule.js')*/
  /*@@include('frames/LazyLoadModule.js')*/
  /*@@include('frames/OpenCloseModule.js')*/
  /*@@include('frames/RadioOpenCloseModule.js')*/
 
	// =============================================================
	glob.navMenuWrapper = document.getElementById('navMenuWrapper');
	glob.navMenu = document.getElementById('navMenu');
	glob.pageOverlay = document.getElementById('pageOverlay');

	if (!$('body')) {console.log('jQuery Error')}
	// console.log(test);

	/*$('.mainHeader').on('click', '.menu-button', function(e) {
		globFunc.toggleButtonContent(this)	
	})

	$('.mainHeader').on('blur', '.menu-button', function() {
		// console.log('blur')
		if (this.classList.contains('active')) {
			globFunc.toggleButtonContent(this)			
		}
	})*/

	$('.dropdownButton').on('click', function() {
		globFunc.toggleButtonContent(this)
		globFunc.dropDown(this, glob.navMenuWrapper)
	})


  // ---------Popups Block-------

	$('body').on('click', '.searchButton', function() {
  	// e.preventDefault();
  	let modal = $('#popupSearch');
  	if ( modal.length ) {
  		glob.PopupModule.openPopup(modal, "js_openPopup_search");
  	}
  });

  $('body').on('click', '.button', function() {
  	// e.preventDefault();
  	let modal = document.getElementById('id');
  	if ( modal ) {
  		glob.PopupModule.openPopup(modal);
  	}
  });

  // ---------Accordion Blocks-------
	/*$('accordionBlockSelector').on('click', '.buttonSelector', function(e) {
		// console.time('click accordion working time');

		if (document.documentElement.clientWidth < 992) {
			e.stopPropagation();
			let submenuBlock;
			let button = this;

			this.classList.contains('sidebarOpenButton') ? 
				submenuBlock = this.parentElement.nextElementSibling : 
				submenuBlock = this.nextElementSibling;

		// let siblingsBlocks = document.querySelectorAll('#publicInfoPage article.publicInfo-block .titleBlock + .hiddenContent');

			globFunc.toggleButtonContent(button);
			glob.AccordionModule.toggleContent("withoutSiblings", button, submenuBlock );
			// AccordionModule.toggleContent("withSiblings", button, submenuBlock, siblingsBlocks );				

		}
		// console.timeEnd('click accordion working time');
	})*/

  // ---------Text Limit-------
	/*let textBlocks = document.querySelectorAll('.selector');
	textBlocks.length ? TextLimitModule.sliceText(textBlocks, 180) : null;*/
	$(".description .ellipsis").dotdotdot({	height: 80,	truncate: "word",	watch: true});
	$(".title.ellipsis").dotdotdot({	height: 85,	truncate: "word",	watch: true});
	

	// ----------Scroll-to Section---------------
	
	/*$('body').on('click', 'article.story-item', function() {
		
		$('html, body').animate({
			scrollTop: $("#" + $(this).attr('data-story-id') ).offset().top
		}, 500);
	})*/

	// ---------- Sticky block---------------
	/*var stickyAsideBlock = document.querySelector('aside.sticky');

	if ( stickyAsideBlock && document.documentElement.clientWidth > 991 ) {
		var targetStickBlock = stickyAsideBlock.firstElementChild;
		let relativeBlock = document.getElementById(stickyAsideBlock.dataset.stickTo)

		glob.StickyBlockModule.toStick(targetStickBlock, relativeBlock);		
	}*/

	// ---------Clean empty Tags-----
	var textBlocks = document.querySelectorAll('.description > p');

	if (textBlocks.length) {
		for (var i = 0; i < textBlocks.length; i++) {
			textBlocks[i].innerHTML ? null : textBlocks[i].parentElement.removeChild(textBlocks[i]);
		}
	}

	// -------Select----------
	/*$(".chosen-wrapper select").chosen({
	  disable_search_threshold: 8,
	  no_results_text: "Ничего не найдено!",
	  width: "100%"
	});*/



	
	
	
	// ===========Initializations=============
	

	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	if ( w < 450 ){
	  $('.slideItem').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slideItemVertical'
		});
		$('.slideItemVertical').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.slideItem',
		  dots: true,
		  centerMode: true,
		  focusOnSelect: true,
		  vertical: true,
		});
	}
	
	
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	if ( w > 550 ){
	$('.slideItem').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slideItemVertical'
	  });
	  $('.slideItemVertical').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slideItem',
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
	  });
	}

	  var w = window.innerWidth
	  || document.documentElement.clientWidth
	  || document.body.clientWidth;
	  if ( w < 550 ){
		$('.slideItem').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slideItemVertical'
		  });
		  $('.slideItemVertical').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.slideItem',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			vertical: true,
		  });
	  }

	



	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	if ( w < 768 ){
		$('.slideshow').slick({ 
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});



		$('.slide').slick({ 
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: true
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			]
		});
	}
	


});


var containerEl = document.querySelector('.container');
var mixer = mixitup(containerEl);

window.onload = function() {
	console.log('window load')
	// $('#page-preloader').fadeOut('slow');

	// glob.LazyLoadModule.initLazy('lazyBlock')
}


