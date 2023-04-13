const pillsContactTab = document.getElementById('pills-contact-tab');
const pillsProfileTab = document.getElementById('pills-profile-tab');
const pillsHomeTab = document.getElementById('pills-home-tab');
const pillsHomeTabItems = document.getElementById('pills-home-tab-items');
const pillsProfileTabItems = document.getElementById('pills-profile-tab-items');
const pillsContactTabItems = document.getElementById('pills-contact-tab-items');
let activeTab = document.querySelectorAll('.tab-pane.fade.active.show');

// const getAnimation = () => {
// 	let childNode = activeTab[0].childNodes[1].childNodes[3].childNodes;
// 	return childNode.forEach((e) => {
// 		if (e.className === 'col-md-4') {
// 			e.style.backgroundColor = 'red';
// 		}
// 	});
// };
// getAnimation();

pillsContactTab.addEventListener('click', () => {
	let node = pillsContactTabItems.childNodes;
	node.forEach((e) => {
		if (e.className === 'col-md-4 aos-init aos-animate') {
			console.log(e);
			e.style.marginLeft = '0px';
		}
	});
});

pillsProfileTab.addEventListener('click', () => {
	let node = pillsProfileTabItems.childNodes;
	console.log(node);
});

pillsHomeTab.addEventListener('click', () => {
	let node = pillsHomeTabItems.childNodes;
	console.log(node);
});
