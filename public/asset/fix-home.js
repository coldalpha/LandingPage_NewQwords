// ACTION

$('#idsld').keypress(function (e) {
    // e.preventDefault()
  if (e.which == 13) {
    $('#f-cariDomain').click()
    return false;    //<---- Add this line
  }
});


