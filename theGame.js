import inquirer from "inquirer"

import { initQuestions, gameQuestion } from "./questions.js"
import { fox, panther, bear } from "./classes.js"
// const { siberianTiger } = require("./classes")

let myPet
let ui = new inquirer.ui.BottomBar()

const init = async () => {
  let response = await inquirer.prompt(initQuestions)

  if (response.type === "Fox") {
    myPet = new fox(response.name)
    // tigerGameLoop()
    // gameLoop([specific questions])
  } else if (response.type === "Panther") {
    myPet = new panther(response.name)
  } else {
    myPet = new bear(response.name)
  }

  ui.log.write(
    `${myPet.name} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Speed: ${myPet.speed}`
  )

  gameLoop()
}

const gameLoop = async () => {
  try {
    if (myPet.health >= 150) {
      console.log("Game Over")
      return
    }

    myPet.time()

    let response = await inquirer.prompt(gameQuestion)

    if (response.action === "drink") {
      myPet.drink()
    } else if (response.action === "feed") {
      myPet.feed()
    } else if (response.action === "sleep") {
      myPet.sleep()
    } else if (response.action === "clean") {
      myPet.fast()
    }

    ui.log.write(
      `${myPet.name} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Speed: ${myPet.speed}`
    )

    gameLoop()
  } catch (error) {
    console.log(error)
  }
}

init()