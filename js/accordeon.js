function app(){
	function accordeon(){
		var 
				accordeon_a = document.getElementsByClassName('accordeon_a'),
				i = 0,
				accordeonLength = accordeon_a.length,
				accordeonSpead = 5;			

		for(i = 0; i < accordeonLength; i = i+1) {
			accordeon_a[i].addEventListener('click', accordeonActive);
		};

		function accordeonActive(e){
			e.preventDefault();
			var 
					item = this.nextElementSibling,
					items = this.nextElementSibling.getElementsByTagName("li"),
					itemsLength = items.length,
					itemsHeight = 0,
					accordeonActive = document.getElementsByClassName('accordeon_active'),
					accGoDown = 0;						

			for(i = 0; i < itemsLength; i = i+1) {
				itemsHeight = itemsHeight + items[i].offsetHeight;
			};

			if(!this.classList.contains('accordeon_active')) {
				for(i = 0; i < accordeonActive.length; i = i+1) {
					var 
							accGoUp = accordeonActive[i].nextElementSibling.offsetHeight,
							item_j = accordeonActive[i].nextElementSibling;

					var accordeonUp = setInterval(function () {
						accGoUp = accGoUp - accordeonSpead;
						if(accGoUp <= 0) {
							accGoUp = 0;
							accordeonUp = clearInterval(accordeonUp);
						};
						item_j.style.height = accGoUp + 'px';
					}, 10);	

					accordeonActive[i].classList.remove('accordeon_active');
				};

				var accordeonDown = setInterval(function () {
					accGoDown = accGoDown + accordeonSpead;
					if(accGoDown >= itemsHeight) {
						accordeonDown = clearInterval(accordeonDown);
					};
					item.style.height = accGoDown + 'px';
				}, 10);
				this.classList.add('accordeon_active');	
			} else {
				this.classList.remove('accordeon_active');	
				item.style.height = '0px';
			};					
		};
	};
	accordeon();
};
window.onload = app();