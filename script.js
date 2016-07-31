function timer(number){
	return new Promise(function(resolve, reject){

		setTimeout(function(){
			resolve()
		}, number)
    
	})
}

module.exports = timer