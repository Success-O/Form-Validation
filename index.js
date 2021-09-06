 function formValidate() 
{
  document.registration;
  if(form.firstName.value=="")
  {
    alert("Enter your first name!");
    form.firstName.focus();
    return;
  }
  if(form.middleName.value=="")
  {
    alert("Enter your middle name!");
    form.middleName.focus();
    return;
  }
  if(form.lastName.value=="")
  {
    alert("Enter your last name!");
    form.lastName.focus();
    return;
  }
