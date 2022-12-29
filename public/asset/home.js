function searchAfterWord(word, str, until) {
	// https://regex101.com/r/Oa7uHv/1
	const regex = new RegExp(`(?<=${word})[^${until}]+`, "g");
	let m;
	if ((m = regex.exec(str)) !== null) {
		return m[0];
	}
	return false;
}

function editHref__old(el, key, value) {
	const href = $(el).attr("href");
	const result = searchAfterWord(key + "=", href, "&");

	var newhref;
	if (Boolean(result)) {
		newhref = href.replace(result, value);
	} else {
		newhref = href + "&" + key + "=" + value;
	}

	$(el).attr("href", newhref);
	return newhref;
}

function editHref(el, key, value) {
	try {
		const href = $(el).attr("href");

		const pos = href.indexOf(key + "=");
		const value_old = href.slice(pos + key.length + 1);

		var newhref;
		if (pos !== -1) {
			newhref = href.replace(value_old, value);
		} else {
			newhref = href + "&" + key + "=" + value;
		}

		$(el).attr("href", newhref);
		return newhref;
	} catch (err) {
		return "";
	}
}

// banner animation
var $ = jQuery;
setInterval(function () {
	$("#led-1").toggleClass("off-led");
}, 2000);

setInterval(function () {
	$("#led-2").toggleClass("off-led");
}, 2500);

setInterval(function () {
	$("#led-3").toggleClass("off-led");
}, 1500);

setInterval(function () {
	$("#led-4").toggleClass("off-led");
}, 1000);

setInterval(function () {
	$("#led-5").toggleClass("off-led");
}, 3000);

setInterval(function () {
	$("#line-1").toggleClass("off-led");
}, 3000);

setInterval(function () {
	$("#line-2").toggleClass("off-led");
}, 3550);

setInterval(function () {
	$("#animled-1").toggleClass("off-led");
}, 1050);
setInterval(function () {
	$("#animled-2").toggleClass("off-led");
}, 1750);
setInterval(function () {
	$("#animled-3").toggleClass("off-led");
}, 2050);

setInterval(function () {
	$("#lampu-3").toggleClass("off-led");
}, 1050);
setInterval(function () {
	$("#lampu-1").toggleClass("off-led");
}, 1750);
setInterval(function () {
	$("#lampu-2").toggleClass("off-led");
}, 2050);

setInterval(function () {
	$("#anim-led-2").toggleClass("off-led");
}, 1050);
setInterval(function () {
	$("#anim-led-3").toggleClass("off-led");
}, 1750);
setInterval(function () {
	$("#anim-led-4").toggleClass("off-led");
}, 2050);
setInterval(function () {
	$("#anim-led-1").toggleClass("off-led");
}, 1950);

setInterval(function () {
	$("#anim-led-2-1").toggleClass("off-led");
}, 1050);
setInterval(function () {
	$("#anim-led-3-1").toggleClass("off-led");
}, 1750);
setInterval(function () {
	$("#anim-led-4-1").toggleClass("off-led");
}, 2050);
setInterval(function () {
	$("#anim-led-1-1").toggleClass("off-led");
}, 1950);

// section promo
/*
$(document).ready(function(){
  $("#monthly").click(function(e){
    e.preventDefault()
    $(this).addClass("active");
    $("#yearly").removeClass("active");
    $(".year-price").hide(500);
    $(".mont-price").show(500);
  });
  $("#yearly").click(function(e){
    e.preventDefault()
    $(this).addClass("active");
    $("#monthly").removeClass("active");
    $(".mont-price").hide(500);
    $(".year-price").show(500);
  });

  $("#btn-pelanggan").click(function(epent){
    epent.preventDefault();
    $(".pelanggan-content").toggle(300);
  });

});
*/

// owlCarousel
var $ = jQuery;
/*
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
*/

const trueNameApi = async (domain) => {
	const url = `https://qwords.com/api/donuts-suggest.php?sld=${domain}&max=10`;
	//   console.log("hit when domain not available");

	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

let globalStatus = false;
// search domain
$("#f-cariDomain").on("click", async (e) => {
	$("#f-loader").show();
	$("#f-cariDomain").prop("disabled", true);
	$("#domainTrueName, #domainTrueNameHeading, #f-message").empty();

	let trueNameGet = await trueNameApi($("#idsld").val());
	const { domains } = trueNameGet.output;
	const domain = $("#idsld").val() + $("#tld").val();


	if (!psl.isValid(domain)) {
		return;
	}

	if ($("#idsld").val().includes("script>")) {
		return;
	}

	// window.location.href = `https://portal.qwords.com/order/?domainregister=${$('#idsld').val()}${$('#tld').val()}`;

	$("#dataurl").attr(
		"href",
		`https://portal.qwords.com/order/?domainregister=${$(
			"#idsld"
		).val()}${$("#tld").val()}`
	);

	$.post(
		"https://www.qwords.com/api/cek.php",
		{
			domain,
		},
		async function (data) {
			let message;
			// handle error cek domain
			if (data.result == "error") {
				/*$.get('https://portal.qwords.com/order/apis/find.php?domain=' + $('#idsld').val() + $('#tld').val(), function (data2){
                if (data2.data.result.domainStatus == 'available'){
                    message = `<h3><b>Selamat! , <span style="color:#106CB5">www.${encodeURIComponent(domain)}</span> Masih Tersedia!</b></h3>`
                    
                    editHref( $('#btn-domain-hosting-1')[0], 'domainregister', domain)
                    editHref( $('#btn-domain-hosting-2')[0], 'domainregister', domain)
                    editHref( $('#btn-domain-hosting-3')[0], 'domainregister', domain)
                    editHref( $('#btn-domain-hosting-4')[0], 'domainregister', domain)
                    
                    
                } else {
                    message = `<h3><b>Mohon Maaf domain <span style="color:#106CB5">${encodeURIComponent(domain)}</span> tidak tersedia :( </h3>
                    <div class="text-center"><button class="btn btn-primary btn-rounded shadow-primary waves-effect waves-light" onClick="scrollToSearch()">Cari nama domain lain </button></div>`
                }
                $('#f-message').html(message)
                $('#searchModal').appendTo("body").modal('show')
                $('#f-loader').hide()
                $('#domain-saja').show()
                
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#promo").offset().top - 100
                }, 100);  
            })*/
				return;
			}
			$("#f-cariDomain").prop("disabled", false);
			$("#domain-saja").hide();
			if (data.status == "available" || data.status == "auctioned") {
				message = `<h3><b>Selamat! , <span style="color:#106CB5">www.${encodeURIComponent(
					domain
				)}</span> Masih Tersedia!</b></h3>
			`;

				$("#domainTrueName").addClass("my-3");

				// if ($('#tld').val() == '.com') {
				//     message = `<h3><b>Selamat! , <span style="color:#106CB5">www.${encodeURIComponent(
				// 		domain
				// 	)}</span> Masih Tersedia!</b></h3>`
				// }

				editHref(
					$("#btn-domain-hosting-1")[0],
					"domainregister",
					domain
				);
				editHref(
					$("#btn-domain-hosting-2")[0],
					"domainregister",
					domain
				);
				editHref(
					$("#btn-domain-hosting-3")[0],
					"domainregister",
					domain
				);
				editHref(
					$("#btn-domain-hosting-4")[0],
					"domainregister",
					domain
				);
				$("#f-message").html(message);
			    $("#searchModal").appendTo("body").modal("show");
			    $("#f-loader").hide();
				$("#domain-saja").show();
			} else {
				message = `<h3><b>Mohon Maaf domain <span style="color:#106CB5">${encodeURIComponent(
					domain
				)}</span> tidak tersedia :( </h3>
                <div class="text-center"><button class="btn btn-primary btn-rounded shadow-primary waves-effect waves-light" style="background-color:green !important; margin-bottom: 35px !important; border-color:green !important;" onClick="scrollToSearch()">Kembali</button></div>`;
			
			    $("#f-message").html(message);
			    $("#searchModal").appendTo("body").modal("show");
			    $("#f-loader").hide();
			}
            $("#domainTrueNameHeading").append(`
                    <h4 id="truename-suggest" class="font-weight-bolder text-center ">Domain Tambahan Lainnya</h4>
                `);
			domains.forEach((item) => {
				$("#domainTrueName").append(`
                <div class="col-12 col-md-6">
                    <div class="truename-card card mx-1 p-3">
                        <p class="domain-truename-header text-center mb-0" title="${item.domain.toLowerCase()}">${item.domain.toLowerCase()}</p>
                        <h5 class="text-center text-primary mb-0 my-2 font-weight-bold text-nowrap">.${
							item.tld
						}</h5>
                        <p class="font-weight-bolder text-center font135 vivid-colors fancy dark-souls no-margin-top">${parseInt(
							item.price
						).toLocaleString("id-ID", {
							style: "currency",
							currency: "IDR",
							minimumFractionDigits: 0,
							maximumFractionDigits: 0,
						})}</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://portal.qwords.com/order/?domainregister=${item.domain.toLowerCase()}&from=donut" class="my-2 btn btn-primary btn-rounded shadow-primary waves-effect waves-light px-5">Pesan</a>
                        </div>
                        <div class="text-right truename-img">
                            <img src="https://www.qwords.com/wp-content/themes/qwords_v10/assets/images/homepage/IdentityDigital_logo_rgb_FC-small.png" width="70px"
                            />
                            <div class="truename-tip p-3">
                                Identity Digital domains are new domain extensions that offer more authenticity and flexibility for choosing a name that represents you. In addition to superior choice and creative brand-building power, Identity Digital domains offer more security than legacy domain extensions (like .com, .net, and others). For details <a href="https://truename.domains/" target="_blank"> click here </a>
                            </div>
                        </div>
                    </div>
                </div>
                `);
			});

		
		

			$([document.documentElement, document.body]).animate(
				{
					scrollTop: $("#promo").offset().top - 100,
				},
				100
			);

			// const tld = $('#tld').val().replace(/^\./,'')
			// const indexFindDomain = promo_raw.findIndex( arr => {
			//     return arr[0] == tld
			// } )

			// let key
			// if (indexFindDomain == -1) {
			//     key = "default-1,default-2"
			// } else {
			//     key = promo_raw[indexFindDomain][1]
			// }

			// renderList(key)
		}
	);
});

// domain and package hosting
$("#btn-order-vph").click(() => {
	window.location.href = `https://portal.qwords.com/order?pid=433&billingcycle=annually&domainregister=${$(
		"#idsld"
	).val()}${$("#tld").val()}`;
});

$("#btn-order-unlimited").click(() => {
	window.location.href = `https://portal.qwords.com/order/?promocode=FRSTTMEPRM&pid=392&billingcycle=annually&domainregister=${$(
		"#idsld"
	).val()}${$("#tld").val()}`;
});

$("#btn-order-bch").click(() => {
	window.location.href = `https://portal.qwords.com/order/?pid=457&billingcycle=triennially&domainregister=${$(
		"#idsld"
	).val()}${$("#tld").val()}`;
});

/*
@author aep
*/

$(".select2").select2({
	ajax: {
		url: "https://www.qwords.com/api/domain.php",
		processResults: function (data) {
			// Transforms the top-level key of the response object from 'items' to 'results'
			const datas = data.map((val) => {
				return {
					id: val[1],
					text: val[1],
				};
			});
			return {
				results: datas,
			};
		},
	},
});

function scrollToSearch() {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		500
	);
}

$("#button-multi-domain").click(function (e) {
	e.preventDefault();
	$("#cari-domain-multi").collapse("toggle");
});

$("#cari-domain-multi").on("hidden.bs.collapse", function () {
	$("#header-slider").removeAttr("style");
	$("#button-multi-domain > i").attr(
		"class",
		"fas fa-angle-down rotate-icon"
	);
});

$("#cari-domain-multi").on("show.bs.collapse", function () {
	$("#header-slider").css("padding-bottom", 300);
	$("#button-multi-domain > i").attr("class", "fas fa-angle-up rotate-icon");
});

$("#cari-domain-multi-btn").click(function () {
	const value = $("#txt-multi-domain").val();
	location.href = "https://portal.qwords.com/order/?multidomain=" + value;
});
