
var modal = {
	open : function(opt){
//		opt = {
//			modal: opt.modal
//		};
		var lock = '.lock_overlay';
		$(opt.modal).wrap('<div class="lock_overlay"></div>');
		$(lock).css({'display':'block'});
//		$(opt.modal).css({'display':'block'});
		$(opt.modal).fadeIn();	
		$('body').addClass('modal');
	},
	close : function(opt){
		var lock = '.lock_overlay';
		$(lock).css({'display':'none'});
		$(opt.modal).unwrap('<div class="lock_overlay"></div>');
		$(opt.modal).css({'display':'none'});
		$('body').removeClass('modal');
	}
} 