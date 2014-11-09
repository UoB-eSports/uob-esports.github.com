(function(window, document, $) {

	// Javascript to enable link to tab
    if (document.location.toString().match('#')) {
        $('#tabs a[href=#'+document.location.toString().split('#')[1]+']').tab('show');
    }

    // Change hash for page-reload
    $('#tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
        window.scrollTo(0, 0);
    });
	
})(window, document, jQuery);