/**
 * 	编辑器有关插入图片的函数
 */

function effity_editor_image(){
	// 图片按钮
	$("#picture_button").click(function(){
		if($(this).attr("clicked") == "false")
		{
			$("#picture_window").css({
				"right"	: "20px",
				"top"	: "105px"
			});
			
			set_float_window_top($("#picture_window"));
			
			$("#picture_window").show();
			
			$(this).attr("clicked", "true");
		}
		else if($(this).attr("clicked") == "true")
		{
			$("#picture_window").hide();
			
			$(this).attr("clicked", "false");
		}
	});
	
	// 上传图片
	$("#eiu_upload").click(function(){
		
		alert("在这部分添加上传图片代码...\n出于安全因素考虑，暂不允许上传图片，这里会使用一张示例图片作为已上传的图片。");
		
		var choose = $("#eiu_left");
		var img = "http://effity.com/img/logo_small.png";
		
		choose.attr("img", img);
		choose.html("<img id=eiu_img src="+img+">");
	});
	
	// 插入图片
	$("#eiu_insert").click(function(){
		var img = $("#eiu_left").attr("img");		
		var t   = $("#ehe_main");
		
		if(img != "")
		{
			var image = document.createElement("img");
			image.src = img;
			
			if(range_temp)
			{				
				range_temp.deleteContents();
				range_temp.insertNode(image);
			}
			else
			{
				t.append($(image));
			}
			
			t.blur();
			
			inner_a_function();
		}
		else
		{
			alert("未选择图片!");
		}
	});
}