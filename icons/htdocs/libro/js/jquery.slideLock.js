// slideLock JQuery Plugin
/*

	slideLock adds a JQuery UI slider along with 'lock' and 
	'unlock' labels. Be sure to upload the default arrow icon 
	or change the path in the options. 
	
	The purpose of this plugin is to provide an alternative to
	traditional CAPTCHA. The user simply slides the lock open
	and the plugin sets a value for the server to check. 
		
	You still need to check on the server side the value of the 
	inserted hidden field with the name and id of 'inputID'.
	You can set these values in the options and must be integers.
	
	*** REQUIRES >= jQuery 1.4 					***
	*** REQUIRES jQuery UI >= 1.7 slider plugin ***
	
	Version: 2.0
		- Fixed a bug that causes the plugin to fail when the ID of
		  the inputs are changed -- thanks to Steve Kruse <steve@wnywebsites.com>
		  
		- Includes revised PHP code to allow for Javascript being disabled
	
*/
(function($) {
		  
	$.fn.slideLock = function(options) {
		
		// set defaults
		var defaults = {
		
			// style these options with css to fit your application
			labelText: "Slide to Unlock:",
			noteText: "Proves you're human :)",
			lockText: "Locked",
			unlockText: "Unlocked",
			iconURL: "../arrow_right.png",
			inputID: "sliderInput",
			onCSS: "#333",
			offCSS: "#aaa",
			inputValue: 1,
			saltValue: 9,
			checkValue: 10,
			js_check: "js_check",
			submitID: "#submit"
									 
		};
		
		var opts = $.extend(defaults, options);
		
		// remove hidden form field to allow for server side validation
		$("#" + opts.js_check).remove();
		
		// insert ui function
		function insertLocker() {
			
			var uiHTML = '<p class="slider"><label for="slider_captcha">' + opts.labelText + '<br/><span class="quiet">' + opts.noteText + '</span></label>';
			uiHTML += '<div id="slider_captcha" title="Desplaza para desbloquear el formulario"></div></p>';
			uiHTML += '<p class="quiet"><span id="locked">' + opts.lockText + '</span><img src="' + opts.iconURL + '" alt="Desplaza a la derecha" /><span id="unlocked">' + opts.unlockText + '</span></p>';
			uiHTML += '<input type="hidden" name="' + opts.inputID + '" value="" id="' + opts.inputID + '" />';
			
			return uiHTML;
			
		}
				
		return this.each(function() {
			
			var obj = $(this);
			
			// insert ui elements before the form's submit button
			var submitButton = $(opts.submitID);	
			submitButton.before(insertLocker());
			
			// disable submit button
			$(submitButton).css('margin-top', '15px').attr('disabled', 'disabled');
			
			// slider functionality
			$("#slider_captcha", obj).slider({
				
				animate: true,
				value: 0,
				min: 0,
				max: opts.inputValue,
				step: opts.inputValue,
				stop: function(event, ui) {
			
					// set value of usercheck
					$("#" + opts.inputID, obj).val(ui.value + opts.saltValue);
					
					// enable submit button
					if($("#" + opts.inputID, obj).val() == opts.checkValue) {
						
						// change color of labels
						$("#locked", obj).css({'color': opts.offCSS, 'font-weight': 'normal'});
						$("#unlocked", obj).css({'color': opts.onCSS, 'font-weight': 'bold'});
						
						// enable
						$(submitButton).attr('disabled', ''); 
					
					}else{
					
						// change color of labels
						$("#locked", obj).css({'color': opts.onCSS, 'font-weight': 'bold'});
						$("#unlocked", obj).css({'color': opts.offCSS, 'font-weight': 'normal'});
						
						// disable
						$(submitButton).attr('disabled', 'disabled');
					
					}
					
				}
				
			});
								  
		});
		
	};
		  
})(jQuery);			