jQuery(function() {
	jQuery('.ss_button').on('click',function() {
		jQuery('.ss_content').slideUp('fast');
		jQuery(this).next('.ss_content').slideDown('slow');
	});
});


window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})
