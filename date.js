function counting()
	{
		var today = new Date();
		
		var day = today.getDay()+1;
		if (day<10) day = "0"+day;
		var month = today.getMonth()+1;
		if (month<10) month = "0"+month;
		var year = today.getFullYear();
		
        document.getElementById("date").innerHTML = day+"."+month+"."+year;
		
        var godzina = today.getHours();
        if (godzina<10) godzina = "0"+godzina;
        var minuta = today.getMinutes();
        if (minuta<10) minuta = "0"+minuta;
        var sekunda = today.getSeconds();
        if (sekunda<10) sekunda = "0"+sekunda;
        
        document.getElementById("clock").innerHTML = godzina+":"+minuta+":"+sekunda;
        setTimeout("counting()",1000);
	}	