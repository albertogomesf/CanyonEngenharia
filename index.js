$( document ).ready(function() {
     amplitude.getInstance().logEvent('Pagina Inicial');
});

function whatsapp() {
		amplitude.getInstance().logEvent('WhatsApp');
	}
	function facebook() {
		amplitude.getInstance().logEvent('Facebook');
	}