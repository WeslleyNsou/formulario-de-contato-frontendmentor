var Fname = document.getElementById('fname')
var Lname = document.getElementById('lname')
var Email = document.getElementById('email')
//Query Type
var General = document.getElementById('general')
var Support = document.getElementById('support')

function checkinputs(){
    var FnameValue = Fname.value;
    var LnameValue = Lname.value;
    var EmailValue = Email.value;
    //Query Type
    var GeneralValue = General.value;
    var SupportValue = Support.value;

   
 
    function {
        var opcoes = getElementByName('query')
        var opcoesselecionadas = null

        for (var i = 0; i < opcoes.length; i++){
            if(opcoes[i].checked){
                opcoesselecionadas = opcoes[i].value;
                break;
            }
        }
        if(opcoesselecionadas){
            alert('opcao selecionada:' + opcoesselecionadas)
        }else{
            alert('nenhuma opcao celecionada')
        }
    }
}