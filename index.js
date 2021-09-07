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
  if(form.dateOfBirth.value=="")
  {
    alert("Enter your Date of birth!");
    form.dateOfBirth.focus();
    return;
  }
  if(form.placeOfBirth.value=="")
  {
    alert("Enter your Place of birth!");
    form.placeOfBirth.focus();
    return;
  }
  if(form.stateOfOrigin.value=="")
  {
    alert("Enter State of origin!");
    form.stateOfOrigin.focus();
    return;
  }
  if(form.residentialArea.value=="")
  {
    alert("Fill up this field!");
    form.residentialArea.focus();
    return;
  }
  if(form.LGA.value=="")
  {
    alert("Fill up this field!");
    form.LGA.focus();
    return;
  }
  if(form.city.value=="")
  {
    alert("Fill up this field")
    form.city.focus();
    return;
  }
  if(form.country.value=="")
  {
    alert("Fill up this field!");
    form.country.focus();
    return;
  }
  if(form.phoneNumber.value=="")
  {
    alert("Fill up this field!")
    form.phoneNumber.focus();
    return;
  }
  if((formValidate.sex[0].checked==false)&&(formValidate.sex[1].checked==false))
  {
    alert("Choose the Gender!")
    return false;
  }
}
