
const animeSelected = id => {
    document.cookie = "animeId=" + id;
    window.location = '/anime_detail';
};



const once = (fn, context) => { 
	let result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}



const sendData = once(() => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const btn = document.getElementsByClassName('add-list-btn')[0];
        btn.classList.add('success-btn')
        btn.innerHTML = 'Added'
    }

    xhr.open("POST", "/list");
    xhr.setRequestHeader("Content-type", "application/json");
    const title = document.getElementsByClassName('anime-title')[0].innerText;
    const src = document.getElementsByClassName('cover-image')[0].src;
    
    const data = {title: title, src: src};
    const json = JSON.stringify(data);
    
    xhr.send(json)
});


    const deleteData = (title, src) => {
        const xhr = new XMLHttpRequest();
    
        xhr.open("DELETE", "/list");
        xhr.setRequestHeader("Content-type", "application/json");
        
        const data = {title: title, src: src};
        const json = JSON.stringify(data);        
        xhr.send(json);

        setTimeout(function(){    
            window.location.reload();    
        },100);
        }
    


const redirect = () => {
    alert('login to add to list!');
    window.location.href = '/users/login'
}