

function test(){
			var tituloTexto = document.querySelector("#navContainer");
			tituloTexto.animate([
					{opacity: .1},
					{opacity: .3},
					{opacity: .6},
					{opacity: .8},
					{opacity: 1}
				],{
					duration : 1000,
					easing: 'ease-out'
				});
}

