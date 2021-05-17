<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript">
$('input[value=Save]').click(function ()
    {
        PreSaveAction();
    });

function PreSaveAction() {
  var designation = $('select[title="Designations"] option:selected').val();
  var salary = $('input[title="Salary"]').val();
  if(designation == 'ELT')
  {
    if (salary >= 10000 && salary <= 20000)
    {
      alert("Saved successfully.");
      return true;
    }
    else
    {
      alert("Please give salary within the range - 10000 to 20000");
      return false;
    }
  }

  if(designation == 'PAT')
  {
    if (salary >= 25000 && salary <= 40000)
    {
      alert("Saved successfully.");
      return true;
    }
    else
    {
      alert("Please give salary within the range - 25000 to 40000");
      return false;
    }
  }

  if(designation == 'Associate')
  {
    if (salary >= 45000 && salary <= 60000)
    {
      alert("Saved successfully.");
      return true;
    }
    else
    {
      alert("Please give salary within the range - 45000 to 60000");
      return false;
    }
  }

  if(designation == 'SA')
  {
    if (salary >= 65000 && salary <= 80000)
    {
      alert("Saved successfully.");
      return true;
    }
    else
    {
      alert("Please give salary within the range - 65000 to 80000");
      return false;
    }
  }

  if(designation == 'Manager')
  {
    if (salary >= 80000 && salary <= 100000)
    {
      alert("Saved successfully.");
      return true;
    }
    else
    {
      alert("Please give salary within the range - 80000 to 100000");
      return false;
    }
  }
}
</script>
