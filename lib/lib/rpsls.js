export function rps(shot){
    const choices = ["rock", "paper", "scissors"];
    const computerShot = choices[Math.floor(Math.random() * choices.length)];

    if (shot === undefined){
        return {"player": computerShot}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Invalid input")
    }

    if (shot === computerShot) {
        const result = "tie";
        return {"player": shot, "opponent": computerShot, "result": result}
      } else if (
        (shot === "rock" && computerShot === "scissors") ||
        (shot === "paper" && computerShot === "rock") ||
        (shot === "scissors" && computerShot === "paper")
      ) {
        const result = "win"
        return {"player": shot, "opponent": computerShot, "result": result}
      } else {
        const result = "lose"
        return {"player": shot, "opponent": computerShot, "result": result}
      }
    }
    
export function rpsls(shot){
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerShot = choices[Math.floor(Math.random() * choices.length)];

    if (shot === undefined){
        return {"player": computerShot}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Invalid input")
    }
    
    if (shot === computerShot) {
        const result = "tie";
        return {"player": shot, "opponent": computerShot, "result": result}
      } else if (
        (shot === "rock" && computerShot === "scissors") ||
        (shot === "paper" && computerShot === "rock") ||
        (shot === "rock" && computerShot === "lizard") ||
        (shot === "lizard" && computerShot === "spock") ||
        (shot === "spock" && computerShot === "scissors") ||
        (shot === "scissors" && computerShot === "lizard") ||
        (shot === "lizard" && computerShot === "paper") ||
        (shot === "paper" && computerShot === "spock") ||
        (shot === "spock" && computerShot === "rock") ||
        (shot === "scissors" && computerShot === "paper")
      ) {
        const result = "win"
        return {"player": shot, "opponent": computerShot, "result": result}
      } else {
        const result = "lose"
        return {"player": shot, "opponent": computerShot, "result": result}
      }
}
