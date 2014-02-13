$(function () {
	//表单各个对象
	var userNameObject = $("#userName");
	var userPasswordObject = $("#userPassword");
	var userConfirmPasswordObject = $("#userConfirmPassword");
	var userEmailObject = $("#userEmail");
	var userMobileObject = $("#userMobile");
	var userTelephoneObject = $("#userTelephone");
	var userIdCardObject = $("#userIdCard");
	var userCredentialsTypeObject = $("#credentialsType");

	/*表单提交按钮单击事件 start*/
	$('#submitBtn').click(function () {

		/*总校验 start*/
//		if (checkUserName(userNameObject) &&
//			checkUserPassword(userPasswordObject) &&
//			checkUserConfirmPassword(userPasswordObject, userConfirmPasswordObject) &&
//			checkUserEmail(userEmailObject) &&
//			checkUserMobile(userMobileObject) &&
//			checkUserTelephone(userTelephoneObject) &&
//			checkUserIdCard(userIdCardObject) &&
//			checkUserCredentialsType(userCredentialsTypeObject)) {

		if (checkUserRadio()) {
			$('#formId').submit();
		}
		/*总校验 end*/

		return;
	});
	/*表单提交按钮单击事件 end*/

	/*表单提交按钮键盘回车事件 start*/
	$("body").bind('keyup', function (event) {
		if (event.keyCode == 13) {
			$('#submitBtn').click();
		}
	});
	/*表单提交按钮键盘回车事件 end*/

});
//============================================================================================================
/*验证用户名 start*/
var checkUserName = function (obj) {

	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "用户名不能为空");
		obj.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj)) {
			showErrorTip(obj, "您输入的内容中包含空格，请重新输入");
			obj.focus();
			return false;
		}

		//校验字符长度，其中min是代表能输入的最小长度值，max代表能被输入的最大长度值，min==max则只能是这个长度值
		if (checkLength(obj, 1, 6)) {
			showErrorTip(obj, "您输入的内容中长度不正确，请重新输入");
			obj.focus();
			return false;
		}

		//显示正确图标
		showRightTip(obj);
		return true;
	}
};
/*验证用户名 end*/
//======================================================
/*校验密码 start*/
var checkUserPassword = function (obj) {
	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "密码不能为空");
		obj.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj)) {
			showErrorTip(obj, "您输入的内容中包含空格，请重新输入");
			obj.focus();
			return false;
		}

		//校验字符长度，其中min是代表能输入的最小长度值，max代表能被输入的最大长度值，min==max则只能是这个长度值
		if (checkLength(obj, 6, 6)) {
			showErrorTip(obj, "您输入的内容中长度不正确，请重新输入");
			obj.focus();
			return false;
		}

		//校验密码必须为纯数字
		if (checkNumber(obj)) {
			showErrorTip(obj, "密码必须为纯数字，请重新输入");
			obj.focus();
			return false;
		}

		//显示正确图标
		showRightTip(obj);
		return true;
	}
};
/*校验密码 end*/
//======================================================
/*校验确认密码 start*/
var checkUserConfirmPassword = function (obj1, obj2) {
	if ($.trim(obj2.val()) == "") {
		showErrorTip(obj2, "确认密码不能为空");
		obj2.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj2)) {
			showErrorTip(obj2, "您输入的内容中包含空格，请重新输入");
			obj2.focus();
			return false;
		}

		//校验字符长度，其中min是代表能输入的最小长度值，max代表能被输入的最大长度值，min==max则只能是这个长度值
		if (checkLength(obj2, 6, 6)) {
			showErrorTip(obj2, "您输入的内容中长度不正确，请重新输入");
			obj2.focus();
			return false;
		}

		//校验密码必须为纯数字
		if (checkNumber(obj2)) {
			showErrorTip(obj2, "确认密码必须为纯数字，请重新输入");
			obj2.focus();
			return false;
		}

		//校验密码和确认密码必须一致
		if (checkEqual(obj1, obj2)) {
			showErrorTip(obj2, "密码和确认密码不一致，请重新输入");
			obj2.focus();
			return false;
		}


		//显示正确图标
		showRightTip(obj2);
		return true;
	}
};
/*校验确认密码 end*/
//======================================================
/*验证邮箱 start*/
var checkUserEmail = function (obj) {

	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "邮箱不能为空");
		obj.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj)) {
			showErrorTip(obj, "您输入的内容中包含空格，请重新输入");
			obj.focus();
			return false;
		}

		//校验邮箱
		if (checkEmail(obj)) {
			showErrorTip(obj, "您输入的邮箱格式不正确，请重新输入");
			obj.focus();
			return false;
		}

		//显示正确图标
		showRightTip(obj);
		return true;
	}
};
/*验证邮箱 end*/
//======================================================
/*验证手机 start*/
var checkUserMobile = function (obj) {

	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "手机号码不能为空");
		obj.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj)) {
			showErrorTip(obj, "您输入的内容中包含空格，请重新输入");
			obj.focus();
			return false;
		}

		//校验手机
		if (checkMobile(obj)) {
			showErrorTip(obj, "您输入的手机号码格式不正确，请重新输入");
			obj.focus();
			return false;
		}

		//显示正确图标
		showRightTip(obj);
		return true;
	}
};
/*验证手机 end*/
//======================================================
/*验证电话 start*/
var checkUserTelephone = function (obj) {

	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "电话号码不能为空");
		obj.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj)) {
			showErrorTip(obj, "您输入的内容中包含空格，请重新输入");
			obj.focus();
			return false;
		}

		//校验电话
		if (checkTelephone(obj)) {
			showErrorTip(obj, "您输入的电话号码格式不正确，请重新输入");
			obj.focus();
			return false;
		}

		//显示正确图标
		showRightTip(obj);
		return true;
	}
};
/*验证电话 end*/
//======================================================
/*验证身份证 start*/
var checkUserIdCard = function (obj) {

	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "身份证号码不能为空");
		obj.focus();
		return false;
	} else {
		//校验字符中间是否含有空格
		if (checkBlankSpace(obj)) {
			showErrorTip(obj, "您输入的内容中包含空格，请重新输入");
			obj.focus();
			return false;
		}

		//校验身份证
		if (checkIdCard(obj)) {
			showErrorTip(obj, "您输入的身份证号码格式不正确，请重新输入");
			obj.focus();
			return false;
		}

		//显示正确图标
		showRightTip(obj);
		return true;
	}
};
/*验证身份证 end*/
//======================================================
/*验证单选下拉框-证件类型 start*/
var checkUserCredentialsType = function (obj) {

	if ($.trim(obj.val()) == "") {
		showErrorTip(obj, "请选择一种证件类型");
		obj.focus();
		return false;
	}

	//显示正确图标
	showRightTip(obj);
	return true;
};
/*验证单选下拉框-证件类型 end*/
//======================================================
/*验证radio start*/
var checkUserRadio = function () {
	if ($("input[type='radio'][name='userSex']:checked").length == 0) {
		showErrorTip($('#userSex'), "请选择一个radio值");
		return false;
	}

	//显示正确图标
	showRightTip($('#userSex'));
	return true;
};
/*验证radio end*/
//============================================================================================================
/*显示错误提示 start*/
var showErrorTip = function (obj, errorText) {
	obj.parent().parent().find(".rightValidateDiv").hide();
	obj.parent().parent().find(".errorValidateText").html(errorText);
	obj.parent().parent().find(".errorValidateDiv").show();
};
/*显示错误提示 end*/
//======================================================
/*显示正确提示 start*/
var showRightTip = function (obj) {
	obj.parent().parent().find(".errorValidateDiv").hide();
	obj.parent().parent().find(".rightValidateDiv").show();
};
/*显示正确提示 end*/
//============================================================================================================
/*校验字符中间是否含有空格 start*/
var checkBlankSpace = function (obj) {
	if ($.trim(obj.val()).indexOf(" ") > -1) {
		//字符串中间包含有空格
		return true;
	}
};
/*校验字符中间是否含有空格 end*/
//======================================================
/*校验字符长度 start*/
var checkLength = function (obj, minLength, maxLength) {
	if ((minLength > $.trim(obj.val()).length) || ($.trim(obj.val()).length > maxLength)) {
		//字符串字符长度不符合要求
		return true;
	}
};
/*校验字符长度 end*/
//======================================================
/*校验字节长度 start*/
var checkByteLength = function (obj, minByteLength, maxByteLength) {

	var i, strByteTotalNum;
	strByteTotalNum = 0;//总的字节数
	strTemp = $.trim(obj.val());
	for (i = 0; i < strTemp.length; i++) {
		if ((strTemp.charCodeAt(i) >= 0) && (strTemp.charCodeAt(i) <= 255)) {
			strByteTotalNum = strByteTotalNum + 1;
		} else {
			strByteTotalNum = strByteTotalNum + 2;
		}
	}

	if (strByteTotalNum > maxByteLength) {
		//输入内容字节超长
		return true;
	}
};
/*校验字节长度 end*/
//======================================================
/*校验纯数字 start*/
var checkNumber = function (obj) {
	var reg = /^\d*$/;
	if (!reg.test($.trim(obj.val()))) {
		//含有非数字内容
		return true;
	}
};
/*校验纯数字 end*/
//======================================================
/*校验两者值相同 start*/
var checkEqual = function (obj1, obj2) {
	if ($.trim(obj1.val()) != $.trim(obj2.val())) {
		//两者值不相同
		return true;
	}
};
/*校验两者值相同 end*/
//======================================================
/*校验邮箱 start*/
var checkEmail = function (obj) {
	var reg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
	if (!reg.test($.trim(obj.val()))) {
		//不是合法邮箱格式
		return true;
	}
};
/*校验邮箱 end*/
//======================================================
/*校验手机 start*/
var checkMobile = function (obj) {
	var reg = /^1(\d{10})$/;
	if (!reg.test($.trim(obj.val()))) {
		//不是合法手机格式
		return true;
	}
};
/*校验手机 end*/
//======================================================
/*校验电话 start*/
//考虑到有400这类格式电话，有港澳台电话，所以设置比较模糊，传真的JS可以跟这个一样
var checkTelephone = function (obj) {
	//因为考虑到内地,港台,外国,400等其他原因,所以这个校验不会很严谨
	var reg = /^\d{1,}-\d{1,}-?\d*$/;
	if (!reg.test($.trim(obj.val()))) {
		//不是合法电话号码格式
		return true;
	}
};
/*校验电话 end*/
//======================================================
/*校验身份证 start*/
var checkIdCard = function (obj) {
	if ($.trim(obj.val()).length == 15) {
		var isIDCard = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{2})([0-9]|X)$/;
		if (!isIDCard.test($.trim(obj.val()).toUpperCase())) {
			//不是合法身份证号
			return true;
		}
	} else if ($.trim(obj.val()).length == 18) {
		var isIDCard = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
		if (!isIDCard.test($.trim(obj.val()).toUpperCase())) {
			//不是合法身份证号
			return true;
		}
	} else {
		//不是合法身份证号
		return true;
	}
};
/*校验身份证 end*/
//======================================================
