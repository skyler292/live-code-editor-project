function collect() {
	var html=document.getElementById("html");
	var css=document.getElementById("css");
	var js=document.getElementById("js");
	var code=document.getElementById("combined").contentWindow.document;


	document.body.onkeyup= function()
	{
		code.open();
		code.writeln(html.value +"<style>"+css.value+"</style>"+"<script>"+js.value+"</script>");
		code.close();
	};
};
collect();