﻿
function Test1()
{
  TestedApps.SimpleLoginApp.Run(1, true);
  let form1 = Aliases.SimpleLoginApp.Form1;
  let groupBox = form1.groupBox1;
  groupBox.txtUsername.Click(121, 7);
  groupBox.txtPassword.Click(111, 8);
  form1.btnLogin.ClickButton();
 var kt = groupBox.lblMessage.Text ;
 if(kt == "Vui lòng nhập tên người dùng và mật khẩu."){
   Log.Event("Dung");
 }
 else{
   Log.Error("Sai");
 }
  form1.Close();
}