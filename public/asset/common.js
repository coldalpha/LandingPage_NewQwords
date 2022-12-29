try {
    
    // search domain premium
    document.getElementById('formname-domainpremium').addEventListener('submit', domainorder);
} catch (err){
    console.warn('[ERROR]' + err)
}

function domainorder() {
    var name = document.getElementById('idsld-domain-premium').value;
    var tld = document.getElementById('tld-domain-premium').value;
   
   window.open("https://portal.qwords.com/order/?domainregister="+name+tld, "_blank"); 
   event.preventDefault();
}

function searchAfterWord(word, str, until){
    // https://regex101.com/r/Oa7uHv/1
    const regex = new RegExp(`(?<=${word})[^${until}]+`, 'g');
    let m;
    if ((m = regex.exec(str)) !== null) {
        return m[0];
    }
    return false
}

function editHref(el, key, value){
    const href =  $(el).attr('href')
    const result = searchAfterWord(key +'=', href, '&')
    
    var newhref
    if (Boolean(result)){
        newhref = href.replace(result,value)
    } else {
        newhref = href + '&' + key + '=' + value
    }
    
    $(el).attr('href', newhref)
    return newhref
}


/*
@author aep
*/
var termins =  ['mont'];

function searchDomain(domain){
    return $.post('https://www.qwords.com/api/cek.php', {domain})
}

function getDomains(domain){
    return $.get('https://qwords.com/api/domain.php') 
}

function customChangeTabs(el){
    const value  = el.value
    console.log(value)
    // find element above this
    $(el).prev().find(`a[href="#${value}"]`).tab('show')
    console.log($(el).prev())
}


// Used in VPS page
$('.vps-page .custom-select').change(function(){
    const el = $('.btn-order-vps')
    var value = this.value
    
    el.each(function(){
        editHref(this, 'billingcycle', value)
    })
    $('.custom-select').val(value)
    
    // render discount
    Object.entries(server_products).forEach(function(val){
        var price = ""
        try {
            price = val[1][5][value][1]
        } catch(e){
            price = val[1][1]
        }
        
        var discount = ""
        try {
            discount = val[1][1]
        } catch(e){
            discount = ""
        }
        
        if (Boolean(discount)){
            $('.discount-vps-' + val[0]).show()
            $('.discount-vps-' + val[0]).text("Rp " + discount)
        }else {
            $('.discount-vps-' + val[0]).hide()
        }
        
        $('.price-vps-' + val[0]).text("Rp " + price)
    })
})
    
// hover login
$('#btn-login-clientarea').hover(function(){
    $(this).next().addClass('show')
}, function(e){
    if ($(e.relatedTarget).is('.dropdown-menu')){
        
    } else {
        $(this).next().removeClass('show')
    }
})

$('#btn-login-clientarea').next().mouseleave(function(){
    $(this).removeClass('show')
})

$('#btn-new-section').hover(function () {
    $(".menu-register").addClass('show')
}, function(e){
    if ($(e.relatedTarget).is('.menu-register')){
        
    } else {
        $(this).next().removeClass('show')
    }
})

$('#btn-new-section').next().mouseleave(function(){
    $(this).removeClass('show')
})


$('#btn-login-mobile').click(function(e){
    e.preventDefault()
    $('#loginModalNew').modal('show')
})