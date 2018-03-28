// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.select-phone').select2({
        templateResult: formatState
    });

});

function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "/img/flags";
  var $state = $(
    '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};
