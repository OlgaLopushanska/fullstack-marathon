function mine(){
    let name = prompt('What animal is the superhero most similar to?');
    let gender;
    let age;
    let namePat = /^[a-z]{0,20}$/gi; //находит не буквы
    let pat4 = /^0/g; //начинается с 0
    let pat3 = /^[0-9]{0,5}$/g;
    let pat2 = /(female|male)$/gi;
    var result1 = name.match(namePat);
    if(name != null && result1 != null) {
        gender = prompt('Is the superhero male or female? Leave blank if unknown or other');
       let result2 = gender.match(pat2);
       if(gender == "")
            result2 = "huh";//пустая строка
        if(result2 != null) {
           age = prompt('How old is the superhero?');
           var result3 = age.match(pat3);
           var result4 = age.match(pat4);
           if (result3 != null && result4 == null) {
               if(result2 == 'male' && result3 < 18)
                   alert('The superhero name is: ' + result1 + '-boy');
                else if(result2 == 'male' && result3 >= 18)
                   alert('The superhero name is: ' + result1 + '-man');
               else if(result2 == 'female' && result3 < 18)
                   alert('The superhero name is: ' + result1 + '-girl');
               else if(result2 == 'female' && result3 >= 18)
                   alert('The superhero name is: ' + result1 + '-woman');
               else if(result2 == 'huh' && result3 < 18)
                   alert('The superhero name is: ' + result1 + '-kid');
               else if(result2 == 'huh' && result3 >= 18)
                   alert('The superhero name is: ' + result1 + '-hero');
           }
           else {
               alert('Invalid age(more than 5 digits or blank line or starts from 0)');
           }
        }
        else{
            alert('Invalid gender(valid are: female, male or blank line)');
        }
    }
    else {
        alert('Invalid name(length more than 20 symbols or something except letters)');
    }
}