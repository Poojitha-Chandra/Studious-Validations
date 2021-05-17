<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript">
$('input[value=Save]').click(function ()
    {
        PreSaveAction();
    });
function PreSaveAction() {
var joinedDesignation = $('select[title="DesignationsWhenJoined"] option:selected').val();
var designation = $('select[title="Designations"] option:selected').val();
if(joinedDesignation == 'ELT'){
    if(designation != 'PAT'){
        alert("You can only select one level higher designation.");
        return false;
    }
    else {
        alert("Details saved.");
        return true;
    }
}
else if(joinedDesignation == 'PAT'){
    if(designation != 'Associate'){
        alert("You can only select one level higher designation.");
        return false;
    }
    else{
        alert("Details saved.");
        return true;
    }
}
else if(joinedDesignation == 'Associate'){
    if(designation != 'SA'){
        alert("You can only select one level higher designation.");
        return false;
    }
    else{
        alert("Details saved.");
        return true;
    }
}
else if(joinedDesignation == 'SA'){
    if(designation != 'Manager'){
        alert("You can only select one level higher designation.");
        return false;
    }
    else{
        alert("Details saved.");
        return true;
    }
}
else if(joinedDesignation == 'Manager'){
    if(designation != 'Manager'){
        alert("You can only select one level higher designation.");
        return false;
    }
    else{
        alert("Details saved.");
        return true;
    }
}
}
</script>

