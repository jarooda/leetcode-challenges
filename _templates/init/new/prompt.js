module.exports = [
  {
    type: "input",
    name: "id",
    message: "File Number: ",
    validate(value) {
      if (!value.length) {
        return "File must have a number."
      }
      return true
    }
  },
  {
    type: "input",
    name: "name",
    message: "File Name: ",
    validate(value) {
      if (!value.length) {
        return "File must have a name."
      }
      return true
    }
  },
  {
    type: "select",
    name: "difficulty",
    message: "Difficulty: ",
    initial: ["easy", "medium", "hard"],
    choices: [
      {
        name: "easy",
        message: "Easy"
      },
      {
        name: "medium",
        message: "Medium"
      },
      {
        name: "hard",
        message: "Hard"
      }
    ]
  }
]
