const fs = require('fs');
const data = require('./data.json');

// show
exports.show = function(req, res) {
    const {id} = req.params;

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id;
    })
    
    if(!foundInstructor) return res.send("Instrutor não encontrado.");

    const instructor = {
        ...foundInstructor,
        age: "",
        services: foundInstructor.services.split(","),
        created_at: "",
    }

    return res.render('instructors/show', {instructor: foundInstructor});
}

// create
exports.post = function(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
        if (req.body[key] == ""){
            return res.send("Por favor, preencha todos os campos!");
        }
    }

    let { avatar_url, birth, name, services, gender } = req.body;

    birth = Date.parse(req.body.birth);
    const created_at = Date.now();
    const id = Number(data.instructors.length + 1);

    data.instructors.push({
        id,    
        avatar_url,       
        name, 
        birth, 
        gender,
        services,         
        created_at
    }); 

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error!")

        return res.redirect("instructors");
    })
    // return res.send(req.body);
}



