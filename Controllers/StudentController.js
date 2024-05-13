const Student = require("./../Models/StudentSchema");
exports.getAllStudent = (request, response) => {
  Student.find({}) //.populate({path:"department"})
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
};

exports.getStudent = (request, response) => {
  Student.findOne({ _id: request.params.id }) //.populate({path:"department"})
    .then((data) => {
      if (data == null) next(new Error("Student id not Found"));

      response.status(200).json(data);
    })
    .catch((error) => {
      next(error);
    });
};

//------------------------->add the default image<------------------------------
exports.createStudent = (request, response, next) => {
  console.log(request.file);
  let imageName;
  if (request.file && request.file.filename) {
    imageName = request.file.filename;
  } else {
    imageName = "default_image.jpg";
  }
  let object = new Student({
    _id: request.body._id,
    name: request.body.name,
    department: request.body.department,
    image: imageName,
  });
  object
    .save()
    .then((data) => {
      response.status(201).json({ message: "added", data });
    })
    .catch((error) => next(error));
};

exports.updateStudent = (request, response, next) => {
    let updateFields = {
      name: request.body.name,
      department: request.body.department,
    };
  
    if (request.file && request.file.filename) {
      updateFields.image = request.file.filename;
    }
  
    Student.findByIdAndUpdate(request.params.id, { $set: updateFields }, { new: true })
      .then((data) => {
        if (!data) throw new Error("Student not found");
        response.status(200).json({ message: "updated", data });
      })
      .catch((error) => next(error));
  };
  

exports.deleteStudent = (request, response, next) => {
  Student.findByIdAndDelete(request.params.id)
    .then((data) => {
      if (data == null) throw new Error("Student Is not Found!");
      response.status(200).json({ message: "deleted" });
    })
    .catch((error) => next(error));
};
