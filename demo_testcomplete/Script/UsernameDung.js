﻿function data(){
  var path = "D:\\KiemThuPhamMem\\TestComplete\\dataLogin.xlsx";
  var sheet = "userdung";
  var excel = DDT.ExcelDriver(path,sheet);
  while(!excel.EOF())
  {
    var user = excel.Value("username");
    Test1(user);
    excel.Next();
  }
}
function Test1(user)
{
  TestedApps.SimpleLoginApp.Run(1, true);
  let form1 = Aliases.SimpleLoginApp.Form1;
  let groupBox = form1.groupBox1;
  let textBox = groupBox.txtUsername;
  textBox.Click(107, 12);
  textBox.SetText(user);
  groupBox.txtPassword.Click(94, 10);
  form1.btnLogin.ClickButton();
  var kt = groupBox.lblMessage.Text; 
  if(kt == "Vui lòng nhập mật khẩu.")
  {
    Log.Event("Dung");
  }
  else{
    Log.Error("Sai");
  }
  form1.Close();
}